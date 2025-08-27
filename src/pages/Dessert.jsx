import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
const Dessert = () => {
  const { t, i18n } = useTranslation();

  const images = [
    "/img/CR.png",
    "/img/Sufle.png",

  ];
const prices = [2.90, 5.50];
  const bread = {
    az: [
      {
        label: "Cinnamon Roll",
        desc: "Darçınlı İsti Xırçıltılı Roll (12 ədəd)",
      },
      {
        label: "Şokoladlı Sufle",
        desc: "Bol Şokoladlı Keks, üstü Xırçıltılı, içi Axışqan İsti şokolad",
      },
    ],
    en: [
      {
        label: "Cinnamon Roll",
        desc: "Crispy Cinnamon Roll (12 pieces)",
      },
      {
        label: "Chocolate Lava Cake",
        desc: "Rich Chocolate Cake with a slightly Crunchy crust and a Warm liquid chocolate center",
      },
    ],
    ru: [
      {
        label: "Роллы с Корицей",
        desc: "Хрустящие Роллы с корицей (12 шт.)",
      },
      {
        label: "Шоколадное Суфле",
        desc: "Шоколадное пирожное с хрустящей корочкой и начинкой из горячего шоколада",
      },
    ],
  };

  const items = bread[i18n.language] || bread.az;
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
          desc={item.desc}
          price={prices[index]}
        />
      ))}
    </div>
  );
};

export default Dessert;
