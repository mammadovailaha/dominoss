import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
const Dip = () => {
  const { i18n } = useTranslation();

  const images = [
    "/img/ColoradoKetchup.png",
    "/img/ColoradoBBQ.png",
    "/img/ColoradoRanch.png",
  ];
  const dip = {
    az: [
      {
        label: "Ketçup sous",
      },
      {
        label: "BBQ Sous",
      },
      {
        label: "Ranç Sous",
      },
    ],
    en: [
      {
        label: "Ketchup Sauce",
      },
      {
        label: "BBQ Sauce",
      },
      {
        label: "Ranch Sauce",
      },
    ],
    ru: [
      {
        label: "Томатный кетчуп",
      },
      {
        label: "Барбекью Соус ",
      },
      {
        label: "Ранч Соус",
      },
    ],
  };

  const items = dip[i18n.language] || dip.az;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 my-17 mx-15 ${
        scrollY >= 103 ? "mt-[180px]" : ""
      }`}
    >
      {items.map((item, index) => (
        <Card
          key={index}
          image={images[index]}
          label={item.label}
          price="1"
        />
      ))}
    </div>
  );
};

export default Dip;
