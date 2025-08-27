import { useTranslation } from "react-i18next";

const BasketDrop = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-row items-center p-[12px]">
      <div className="relative group">
        <div className="flex flex-col justify-center align-center cursor-pointer text-center font-[Poppins]">
          <img
            src="./img/basket.webp"
            className="w-[40px[ h-[40px]"
            alt="basket"
          />
          <p className="text-[#0000008A] mt-[3px]">{t("Səbət")}</p>
        </div>

        <ul className="absolute bg-white flex flex-col right-[3px] w-[85px] border border-gray-300 rounded-md shadow-lg z-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 mt-2">
          <li
            className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
          >
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasketDrop;
