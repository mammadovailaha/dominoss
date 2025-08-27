import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { OutlinedInput } from "../reusable-components.jsx/Form-Inputs";
const Join = () => {
  const { t, i18n } = useTranslation();
  const imagebyLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/join-us.png";
      case "en":
        return "/img/join-us.png";
      case "ru":
        return "/img/join-us-rus.png";
    }
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <img
        src={imagebyLanguage()}
        alt="join-us"
        className={`ml-[4%] mt-[16px] h-[35px] ${
          scrollY >= 103 ? "mt-[127px]" : ""
        }`}
      />
      <div className="flex justify-center">
        <div className="py-[15px] max-w-[1140px]">
          <div className="flex gap-5">
            <OutlinedInput
              type="text"
              label="Ad *"
              placeholder="Ad"
              id="Ad"
              required={true}
            />
            <OutlinedInput
              type="text"
              label="Soyad *"
              placeholder="Soyad"
              id="Soyad"
            />
          </div>
          <div className="flex gap-5">
            <OutlinedInput
              type="tel"
              label="MOBİL *"
              placeholder="MOBİL"
              id="MOBİL nömrə"
            />
            <OutlinedInput
              type="email"
              label="E-poçt *"
              placeholder="E-poçt"
              id="Elektron poçt"
            />
          </div>
          <div className="flex gap-5">
            <OutlinedInput type="date" label="Doğum tarixi *" />
          </div>
          <div className="flex gap-5">
            <div className="mr-[10px]">
              <div className="relative mt-6">
                <textarea
                  className="peer w-[547px] h-[137px] py-[18.5px] px-[14px] border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-500"
                  id="message"
                  placeholder={t("SİZİN MESAJINIZ *")}
                  required={true}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-2 bg-white px-1 text-sm text-black font-bold peer-placeholder-shown:text-base peer-focus:text-blue-700 transition-all"
                >
                  {t("SİZİN MESAJINIZ *")}
                </label>
              </div>
              <button
                className="transition-colors flex items-center ml-[15px] gap-2 transition-shadow transition-border duration-300 ease-in-out py-[6px] px-[18px] mt-3 mb-[80px] font-bold cursor-pointer"
                style={{
                  backgroundColor: "rgb(0, 120, 172)",
                  backgroundImage:
                    "linear-gradient(rgb(84, 165, 199), rgb(0, 120, 172))",
                  color: "white",
                  borderRadius: "4px",
                  fontSize: "20px",
                }}
              >
                <svg
                  class="MuiSvgIcon-root"
                  className="w-[20px] h-[20px]"
                  fill="white"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
                <span>{t("Göndərmək")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Join;
