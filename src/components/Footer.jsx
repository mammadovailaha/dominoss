import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { PlayStore } from "../Reusable-Components.jsx/Play-store-button";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const BakedLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/baked-Az.png";
      case "en":
        return "/img/baked-Eng.png";
      case "ru":
        return "/img/baked-rus.png";
    }
  };
  const MinuteLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/30deq.png";
      case "en":
        return "/img/30deq-ENG.png";
      case "ru":
        return "/img/30deq-RUS.png";
    }
  };
  const DeliveryLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/delivery.png";
      case "en":
        return "/img/delivery-eng.png";
      case "ru":
        return "/img/delivery-rus.png";
    }
  };
  const CashLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/cash.png";
      case "en":
        return "/img/cash-eng.png";
      case "ru":
        return "/img/cash-rus.png";
    }
  };
  return (
    <div className="bg-[#f2f2f2] text-[#a4a4a4] text-[14px] font-[Bold]">
      <div className="flex justify-center flex-wrap pt-[48px] mb-[16px]">
        <a href="/">
          <img
            src="./img/halal.png"
            className="w-[70px] h-[70px] ml-[36px] mr-[8px]"
          />
        </a>
        <a href="/">
          <img
            src={MinuteLanguage()}
            className="w-[70px] h-[70px] ml-[36px] mr-[8px]"
          />
        </a>
        <a href="/">
          <img
            src={BakedLanguage()}
            className="w-[70px] h-[70px] ml-[36px] mr-[8px]"
          />
        </a>
        <a href="/">
          <img
            src="./img/happy.png"
            className="w-[70px] h-[70px] ml-[36px] mr-[8px]"
          />
        </a>
      </div>
      <div className="flex justify-center flex-wrap pt-[48px] mb-[16px] mt-[-33.3px]">
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `hover:text-[#d2112c] ${isActive ? "text-blue-700 hover:text-blue-700" : ""}`
          }
        >
          {t("Domino's Haqqında")}
        </NavLink>
        <span className="border-l border-grey-600 w-[1px] h-[20px] mx-[10px]"></span>
        <NavLink
          to="/suggestions-complaints"
          className={({ isActive }) =>
            `hover:text-[#d2112c] ${isActive ? "text-blue-700 hover:text-blue-700" : ""}`
          }
        >
          {t("Təkliflər və şikayətlər")}
        </NavLink>
        <span className="border-l border-grey-600 w-[1px] h-[20px] mx-[10px]"></span>
        <NavLink
          to="/terms-of-service"
          className={({ isActive }) =>
            `hover:text-[#d2112c] ${isActive ? "text-blue-700 hover:text-blue-700" : ""}`
          }
        >
          {t("Xidmət və Sifariş şərtləri")}
        </NavLink>
        <span className="border-l border-grey-600 w-[1px] h-[20px] mx-[10px]"></span>
        <NavLink
          to="/privacy-policy"
          className={({ isActive }) =>
            `hover:text-[#d2112c] ${isActive ? "text-blue-700 hover:text-blue-700" : ""}`
          }
        >
          {t("Gizlilik Siyasəti")}
        </NavLink>
        <span className="border-l border-grey-600 w-[1px] h-[20px] mx-[10px]"></span>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `hover:text-[#d2112c] ${isActive ? "text-blue-700 hover:text-blue-700" : ""}`
          }
        >
          {t("Əlaqə")}
        </NavLink>
        <span className="border-l border-grey-600 w-[1px] h-[20px] mx-[10px]"></span>
        <NavLink
          to="/join-us"
          className={({ isActive }) =>
            `hover:text-[#d2112c] ${isActive ? "text-blue-700 hover:text-blue-700" : ""}`
          }
        >
          {t("Bizə qoşul")}
        </NavLink>
      </div>
      <div className="flex justify-center flex-wrap items-center mt-[-2px]">
        <PlayStore playwidth="w-[120px]" storewidth="w-[100px]" />
        <span className="border-l border-grey-600 w-[1px] h-[45px] ml-[10px]"></span>
        <div className="flex pl-[26px] gap-[8px] items-center">
          <a href="https://www.facebook.com/Dominos.Azerbaijan/">
            <img
              src="./img/fb.png"
              className="w-[40px] h-[40px] p-[4px] grayscale hover:grayscale-0"
            />
          </a>
          <a href="https://www.instagram.com/dominos_az/">
            <img
              src="./img/instagram.png"
              className="w-[40px] h-[40px] p-[4px] grayscale hover:grayscale-0"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCZByvwhybrwYHLZUaf3L2hw">
            <img
              src="./img/yb.png"
              className="w-[40px] h-[30px] p-[4px] grayscale hover:grayscale-0"
            />
          </a>
        </div>
        <span className="border-l border-grey-600 w-[1px] h-[45px] ml-[25px]"></span>
        <div className="flex pr-[10px] items-center">
          <img
            src="./img/visa.png"
            className="w-[55px] h-[30px] p-[4px] grayscale hover:grayscale-0 cursor-pointer"
          />
          <img
            src="./img/mastercard.png"
            className="w-[55px] h-[30px] p-[4px] grayscale hover:grayscale-0 cursor-pointer"
          />
          <img
            src={CashLanguage()}
            className="w-[95px] h-[30px] p-[4px] grayscale hover:grayscale-0 cursor-pointer"
          />
          <img
            src={DeliveryLanguage()}
            className="w-[95px] h-[35px] p-[4px] grayscale hover:grayscale-0 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap pt-[16px] pb-[3px]">
        <p>© 2019-2025 HiTech Prime Private Limited All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
