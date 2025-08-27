import { useTranslation } from "react-i18next";
function Make() {
  const { t, i18n } = useTranslation();
  const getImageByLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/make-your-own.webp";
      case "en":
        return "/img/make-your-own-pizza-en.webp";
      case "ru":
        return "/img/make-your-own-pizza-ru..webp";
    }
  };
  return (
    <div
      className="w-full h-[600px] mt-[20px] bg-center bg-no-repeat flex flex-col justify-center align-center"
      style={{
        backgroundImage: "url('./img/create-your-own-banner.webp')",
        backgroundAttachment: "scroll",
        backgroundSize: "contain",
        position: "relative",
      }}
    >
      <div className="relative">
        <div className="flex justify-end align-center">
          <img src={getImageByLanguage()} className="max-w-[828px] h-[246px]" />
        </div>
        <a className="absolute right-[70px] bottom-[-20px]">
          <button className="flex items-center min-w-[64px] w- full cursor-pointer leading-[1.75] gap-2 px-[16px] py-[8px] text-white bg-[#D2112C] rounded-[8px]">
            <div>
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
                focusable="false"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
                width="20px"
                height="20px"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </svg>
            </div>
            <span className="tracking-[2px] font-[14px]">
              {t("İNDİ YARAT")}
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Make;
