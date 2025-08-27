import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Content from "./Content";

const Mobile = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-wrap pl-[20px] pt-[20px] pb-[20px] ${
        scrollY >= 103 ? "mt-[117px]" : ""
      }`}
    >
      <Content
        showStores={true}
        showBrush={true}
        h5="mobile.title"
        width="w-full sm:basis-1/2 sm:max-w-1/2 md:basis-1/2 md:max-w-1/2 lg:basis-1/2 lg:max-w-1/2 grow-0"
        h5class="text-[#007EB0] text-left"
        left="mobile.subtitle"
        leftclass="text-[#DD2237] text-left"
        mainclass="text-left"
        main="mobile.description"
      />
      <img
        src="./img/dominos-banner-download-app.webp"
        className="w-full sm:basis-1/2 sm:max-w-1/2 md:basis-1/2 md:max-w-1/2 lg:basis-1/2 lg:max-w-1/2 grow-0"
      />
    </div>
  );
};

export default Mobile;
