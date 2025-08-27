import { useTranslation } from "react-i18next";

const Card = ({ image, label, desc, price }) => {
  const { t } = useTranslation();

  return (
    <div className="flex relative flex-col rounded-2xl shadow-lg cursor-pointer overflow-hidden transition-transform duration-500 hover:scale-105">
      <img
        src={image}
        alt={label}
        className="w-full h-[180px] object-contain p-2"
      />
      <div className="w-full px-4 py-3 gap-1 font-[Poppins]">
        <p className="text-[28px] text-[#003752] font-[700]">{label}</p>
        <p className="text-[#616161] text-[20px]">{desc}</p>
        <i className="fa-solid fa-heart text-[30px] text-gray-300 absolute top-4 right-3"></i>
      </div>
      <div className="flex justify-around items-center mb-8 mt-4">
        <div className="flex items-center justify-center gap-1">
          <span className="text-[20px] text-[#08789e] pt-1">{price}</span>
          <img src="/img/manat.png" className="w-5 h-4" />
        </div>
        <button className="flex items-center justify-center min-w-[64px] cursor-pointer leading-[1.75] gap-2 px-[10px] py-[4px] text-white bg-[#D2112C] font-bold rounded-[5px] font-[Poppins]">
          <span className="tracking-[2px] text-[17px]">
            {t("Səbətə əlavə et")}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
