import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";
import { useTranslation } from "react-i18next";

export default function Basket() {
  const { t } = useTranslation();
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {items.length === 0 ? (
        <div className="py-2">
          <div className="text-center flex flex-col items-center text-[#616161] basketdrop shadow-md pb-10">
            <img
              src="./img/empty-cart.webp"
              alt="empty-cart"
              className="w-[300px] pt-10"
            />
            <p className="text-[24px] font-[800] mt-2">{t("Sizin səbətiniz boşdur")}</p>
          </div>
          <p className="text-right font-[700] text-[28px] pr-2 pt-4">
            ÜMUMİ: {total.toFixed(2)} ₼
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 pt-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between shadow-md pb-6 px-6 my-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-20 h-20 object-cover"
                />
                <div className="font-[600] text-[#616161]">
                  <p className="font-semibold text-[24px]">{item.label}</p>
                  <p className="text-[22px] text-gray-500">{item.price} ₼</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-4 cursor-pointer bg-[#D2112C] text-white text-[30px]"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
                <span className="text-[30px]">{item.quantity}</span>
                <button
                  className="px-4 cursor-pointer bg-[#D2112C] text-white text-[30px]"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <p className="text-right font-[700] text-[28px] pr-5">
            ÜMUMİ: {total.toFixed(2)} ₼
          </p>
          <div className="flex justify-center pt-14 pb-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="w-1/4 bg-[#D2112C] text-white py-3 mb-[30px] font-bold rounded-[5px] text-[20px] cursor-pointer"
            >
              {t("Səbəti Təmizlə")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
