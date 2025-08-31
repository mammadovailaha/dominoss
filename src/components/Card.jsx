import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const Card = ({ id, image, label, desc, price, drink }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [size, setSize] = useState(
    drink && drink.sizes ? Object.keys(drink.sizes)[0] : null
  );

  const activePrice = drink?.sizes && size ? drink.sizes[size].price : price;
  const activeImage = drink?.sizes && size ? drink.sizes[size].img : image;
  const activeLabel = drink?.label || label;

  return (
    <div className="flex relative flex-col rounded-2xl shadow-lg cursor-pointer overflow-hidden transition-transform duration-500 hover:scale-105">
      <img
        src={activeImage}
        alt={activeLabel}
        className="w-full h-[180px] object-contain p-2 "
      />

      <div className="w-full px-4 py-3 gap-1">
        <p className="text-[28px] text-[#003752] font-[700]">{activeLabel}</p>
        {desc && <p className="text-[#616161] text-[20px] font-[Poppins]">{desc}</p>}

        {drink?.sizes && (
          <div
            className="mt-2 border border-[#616161] w-full grid rounded overflow-hidden"
            style={{
              gridTemplateColumns: `repeat(${
                Object.keys(drink.sizes).length
              }, minmax(0, 1fr))`,
            }}
          >
            {Object.keys(drink.sizes).map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`text-[14px] py-1 text-[#003752] cursor-grab ${
                  size === s ? "bg-blue-600 text-white rounded" : "bg-white"
                }`}
              >
                {t(s)}
              </button>
            ))}
          </div>
        )}

        <i className="fa-solid fa-heart text-[30px] text-gray-300 absolute top-4 right-3"></i>
      </div>

      <div className="flex justify-around items-center mb-8 mt-4">
        <div className="flex items-center justify-center gap-1">
          <span className="text-[20px] text-[#08789e]">{activePrice}</span>
          <img src="/img/manat.png" className="w-5 h-4" />
        </div>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id,
                label: activeLabel,
                price: activePrice,
                image: activeImage,
              })
            )
          }
          className="flex items-center justify-center min-w-[64px] cursor-pointer leading-[1.75] gap-2 px-[10px] py-[4px] text-white bg-[#D2112C] rounded-[5px]"
        >
          <span className="tracking-[2px] text-[17px]">
            {t("Səbətə əlavə et")}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
