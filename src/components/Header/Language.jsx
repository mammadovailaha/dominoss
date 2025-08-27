import React from "react";
import { useTranslation } from "react-i18next";

const LANG_KEY = "appSelectedLanguage";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const storedLang = localStorage.getItem(LANG_KEY) || "AZ";
  const [selectedLang, setSelectedLang] = React.useState(storedLang);

  React.useEffect(() => {
    i18n.changeLanguage(selectedLang.toLowerCase());
  }, [selectedLang, i18n]);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem(LANG_KEY, lang);
  };

  const flags = {
    AZ: "./img/AZ.png",
    EN: "./img/ENG.png",
    RU: "./img/RUS.png",
  };

  const langNames = {
    AZ: "AZE",
    EN: "ENG",
    RU: "RUS",
  };

  return (
    <div className="flex flex-row items-center p-[12px]">
      <div className="relative group">
        <div className="cursor-pointer flex flex-row items-center justify-center gap-[5px] text-white dark:text-[var(--main-color)] text-sm rounded-md focus:outline-none">
          <div>
            <img
              src={flags[selectedLang]}
              alt={selectedLang}
              className="w-[40px] h-[40px]"
            />
            <p className="text-[#0000008A] mt-[3px] text-center">
              {langNames[selectedLang]}
            </p>
          </div>
        </div>

        <ul className="absolute bg-white flex flex-col right-0 top-[46px] w-[85px] border border-gray-300 rounded-md shadow-lg z-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 mt-2">
          {["AZ", "EN", "RU"]
            .filter((lang) => lang !== selectedLang)
            .map((lang) => (
              <li
                key={lang}
                onClick={() => handleSelect(lang)}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
              >
                <img
                  src={flags[lang]}
                  alt={lang}
                  className="w-[20px] h-[20px]"
                />
                <span className="text-[14px]">{langNames[lang]}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
