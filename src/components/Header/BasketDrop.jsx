import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../redux/cartSlice";

const BasketDrop = () => {
  const { t } = useTranslation();
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="relative group">
      <Link
        to="/basket"
        className="flex flex-col justify-center items-center text-center"
      >
        <img
          src="./img/basket.webp"
          className="w-[40px] h-[40px]"
          alt="basket"
        />
        <p className="text-[#0000008A] mt-[3px]">{t("Səbət")}</p>
      </Link>

      <div className="absolute bg-white flex flex-col right-0 w-[350px] border border-gray-300 rounded-md shadow-lg z-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 mt-2 basketdrop">
        {items.length === 0 ? (
          <div>
            <div className="text-center flex flex-col items-center mt-4 w-full text-[#616161] text-[18px] shadow-md pb-6">
              <img
                src="./img/empty-cart.webp"
                alt="empty-cart"
                className="w-[120px] mb-2"
              />
              <p>{t("Sizin səbətiniz boşdur")}</p>
            </div>
            <div className="my-4 mx-3 grid grid-cols-2 flex items-center">
              <Link
                to="/basket"
                className="flex items-center justify-center min-w-[64px] cursor-pointer leading-[1.75] gap-2 px-[10px] py-[4px] text-white text-[18px] bg-[#D2112C] font-bold rounded-[5px]"
              >
                {t("Səbəti gör")}
              </Link>
              <p className="text-right font-[700] text-[21px]">
                ÜMUMİ: {total.toFixed(2)} ₼
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between pb-2 shadow-md pb-6 pt-3 px-4"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-12 h-12 object-cover"
                  />
                  <div className="font-[700] text-[#616161]">
                    <p className="font-semibold text-[21px]">{item.label}</p>
                    <p className="text-lg text-gray-500">{item.price} ₼</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 cursor-pointer bg-[#D2112C] text-white"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="text-[24px]">{item.quantity}</span>
                  <button
                    className="px-3 cursor-pointer bg-[#D2112C] text-white"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="my-2 mx-3 grid grid-cols-2 flex items-center">
              <Link
                to="/basket"
                className="flex items-center justify-center min-w-[64px] cursor-pointer leading-[1.75] gap-2 px-[10px] py-[4px] text-[18px] text-white bg-[#D2112C] font-bold rounded-[5px]"
              >
                {t("Səbəti gör")}
              </Link>
              <p className="text-right font-[700] text-[21px]">
                ÜMUMİ: {total.toFixed(2)} ₼
              </p>
            </div>
            <button
              onClick={() => dispatch(clearCart())}
              className="w-full bg-[#D2112C] text-white py-2 font-bold text-[18px] cursor-pointer"
            >
              {t("Səbəti Təmizlə")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketDrop;
