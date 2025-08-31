import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LanguageSelector from "./Language";
import Subheader from "./Subheader";
import BasketDrop from "./BasketDrop";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNormal = scrollY < 70;
  const isLogoMode = scrollY >= 70 && scrollY < 103;
  const isFixed = scrollY >= 103;
 const navigate = useNavigate();
 const handleScrollToLogin = () => {
  navigate('/login');
 };

  return (
    <div>
      <nav className="flex justify-between px-[16px] py-[6px] font-[Poppins]">
        <a href="/">
          <img
            className="w-[250px] h-[70px] cursor-pointer py-[5px]"
            src="./img/d.logo.png"
            alt="logo"
          />
        </a>
        <div className="flex justify-center items-center">
          <LanguageSelector />
          <div
          onClick={handleScrollToLogin}
          className="flex flex-col justify-center items-center cursor-pointer text-center p-[12px]">
            <img
              className="w-[40px] h-[40px]"
              src="./img/login.png"
              alt="login"
            />
            <p className="text-[#0000008A] mt-[3px]">{t("Daxil ol")}</p>
          </div>
          <BasketDrop/>
        </div>
      </nav>

      <menu
        className={`w-full bg-white shadow-md inset-shadow-sm drop-shadow-xl ${
          isFixed ? "fixed top-0 left-0 z-50 transition duration-300" : ""
        }`}
      >
        <div className="flex w-full justify-center items-center gap-[15px] relative font-[Bold] text-bold">
          {isNormal && <Subheader />}
          {(isLogoMode || isFixed) && (
            <>
              <div className="flex justify-center items-center">
                <a href="/">
                  <img src="/img/logo.png" className="w-[70px] h-[70px]" />
                </a>
              </div>
              <Subheader />
              <BasketDrop />
            </>
          )}
        </div>
      </menu>
    </div>
  );
};

export default Header;
