import { useTranslation } from "react-i18next";
import { PlayStore } from "../Reusable-Components.jsx/Play-store-button";

const Content = ({
  h5,
  main,
  left,
  h5class,
  leftclass,
  mainclass,
  svg,
  button,
  width,
  flex,
  showStores = true,
  showBrush = true,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div
        className={`flex gap-[8px] flex-col font-[Bold] align-center justify-center ${width}`}
      >
        <h5 className={`font-[500] text-[40px] leading-[48px] ${h5class}`}>
          {t(h5)}
        </h5>
        <div className="flex flex-col">
          <p
            className={`text-[26px] leading-[79.2px] tracking-[4px] mb-[16px] ${leftclass}`}
          >
            {t(left)}
          </p>

          {showBrush && (
            <img src="./img/brush-splash.webp" className="w-[150px] h-[25px]" />
          )}

          <p
            className={`text-[22px] leading-[33px] text-[#A4A4A4] tracking-[2px] mb-[28px] ${mainclass}`}
          >
            {t(main)}
          </p>

          {showStores && (
            <PlayStore playwidth="w-[180px]" storewidth="w-[150px]" />
          )}

          {button && (
            <a className={flex}>
              <button className="flex items-center min-w-[64px] w- full cursor-pointer leading-[1.75] gap-2 px-[16px] py-[8px] text-white bg-[#D2112C] rounded-[8px]">
                {svg && <div>{svg}</div>}
                <span className="tracking-[2px] font-[14px]">{t(button)}</span>
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
