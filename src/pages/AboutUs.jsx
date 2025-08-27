import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const About = () => {
  const { t, i18n } = useTranslation();
  const imagebyLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/about.png";
      case "en":
        return "/img/about-eng.png";
      case "ru":
        return "/img/about-rus.png";
    }
  };
  const getBackgroundImage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/about-bg.png";
      case "en":
        return "/img/about-bg-eng.png";
      case "ru":
        return "/img/about-bg-rus.png";
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
        alt="about"
        className={`ml-[4%] mt-[16px] h-[35px] ${
          scrollY >= 103 ? "mt-[127px]" : ""
        }`}
      />
      <img
        src={getBackgroundImage()}
        alt="about-bg"
        className="h-auto max-w-full slide-in"
      />
    </>
  );
};
export default About;
