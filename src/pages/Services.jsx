import { useTranslation } from "react-i18next";
import { OutlinedInput } from "../reusable-components.jsx/Form-Inputs";
import { useEffect, useState } from "react";
const Services = () => {
  const { t, i18n } = useTranslation();
  const imagebyLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/terms.png";
      case "en":
        return "/img/terms-eng.png";
      case "ru":
        return "/img/terms-rus.png";
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
        alt="terms"
        className={`ml-[4%] mt-[16px] h-[35px] ${
          scrollY >= 103 ? "mt-[127px]" : ""
        }`}
      />
      <div className="flex justify-center px-[10px] py-[10px] slide-in">
        <div className="py-[20px] max-w-[1140px] mb-[15px] text-[#757575]">
          <p className="font-[700] bg-[#0078ac] py-[5px] pl-[20px] pr-[8px] mb-[20px] mt-[34px] text-[28px] text-white">
            {t("“Ümumi məmnuniyyət” xidmətinin şərtləri")}
          </p>
          <p className="text-justify leading-7">
            <span className="font-">1.</span> {t("satisfaction.1")}
            <br />
            <span>2.</span> {t("satisfaction.2")}
            <br />
            <span>3.</span> {t("satisfaction.3")}
            <br />
            <span>4.</span> {t("satisfaction.4")}
            <br />
            <span>5.</span> {t("satisfaction.5")}
            <br />
            <span>6.</span> {t("satisfaction.6")}
          </p>
          <p className="font-[700] bg-[#0078ac] py-[5px] pl-[20px] pr-[8px] mb-[20px] mt-[34px] text-[28px] text-white">
            {t(
              "30 dəqiqəyə Çatdırılma” və ya Hədiyyə Pizza kampaniyasının qaydalar"
            )}
          </p>
          <p className="text-justify leading-7">
            <span>1.</span> {t("delivery30.1")} <br />
            <span>2.</span> {t("delivery30.2")} <br />
            <span>3.</span> {t("delivery30.3")} <br />
            <span>4.</span> {t("delivery30.4")} <br />
            <span>5.</span> {t("delivery30.5")} <br />
            <span>6.</span> {t("delivery30.6")} <br />
            <span>7.</span> {t("delivery30.7")} <br />
            <span>8.</span> {t("delivery30.8")} <br />
            <span>9.</span> {t("delivery30.9")} <br />
            <span>10.</span> {t("delivery30.10")}
            <br />
            <span>11.</span> {t("delivery30.11")}
          </p>
          <p className="font-[700] bg-[#0078ac] py-[5px] pl-[20px] pr-[8px] mb-[20px] mt-[34px] text-[28px] text-white">
            {t("Sifariş qaydaları")}
          </p>
          <p className="text-justify leading-7">
            <span>1.</span> {t("deliveryTerms.1")} <br />
            <span>2.</span> {t("deliveryTerms.2")} <br />
            <span>3.</span> {t("deliveryTerms.3")} <br />
            <span>4.</span> {t("deliveryTerms.4")} <br />
            <span>5.</span> {t("deliveryTerms.5")} <br />
            <span>6.</span> {t("deliveryTerms.6")} <br />
            <span>7.</span> {t("deliveryTerms.7")} <br />
            <span>8.</span> {t("deliveryTerms.8")} <br />
            <span>9.</span> {t("deliveryTerms.9")} <br />
            <span>10.</span> {t("deliveryTerms.10")}
            <br />
            <span>11.</span> {t("deliveryTerms.11")}
            <br />
            <span>12.</span> {t("deliveryTerms.9")} <br />
            <span>13.</span> {t("deliveryTerms.9")} <br />
            <span>14.</span> {t("deliveryTerms.9")}
          </p>
        </div>
      </div>
    </>
  );
};
export default Services;
