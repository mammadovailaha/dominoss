import { useTranslation } from "react-i18next";
import Content from "./Content";
const Tracking = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="flex flex-wrap pl-[20px] pt-[20px] pb-[20px]">
        <Content
          showStores={false}
          showBrush={false}
          h5="tracking.title"
          width="w-full sm:basis-1/2 sm:max-w-1/2 md:basis-1/2 md:max-w-1/2 lg:basis-1/2 lg:max-w-1/2 grow-0"
          h5class="text-[#007EB0] text-left"
          left="tracking.subtitle"
          leftclass="text-[#DD2237] text-left"
          mainclass="text-left"
          main="tracking.description"
          button="tracking.button"
          svg={
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
              focusable="false"
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              aria-hidden="true"
              fill="white"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
          }
        />
        <img src="./img/mobile-store-tracking-banner.webp" className="w-full sm:basis-1/2 sm:max-w-1/2 md:basis-1/2 md:max-w-1/2 lg:basis-1/2 lg:max-w-1/2 grow-0"/>
      </div>
    </>
  );
};
export default Tracking;
