import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
const Salad = () => {
  const { i18n } = useTranslation();

  const images = [
    "/img/TunaSalad.png",
    "/img/FetaCheeseSalad.png",
    "/img/ChickenSalad.png",
  ];
  const salad = {
    az: [
      {
        label: "Ton balıqlı Salat",
      },
      {
        label: "Feta Pendirli Salat",
      },
      {
        label: "Toyuqlu Salat",
      },
    ],
    en: [
      {
        label: "Tuna Salad",
      },
      {
        label: "Feta Cheese Salad",
      },
      {
        label: "Chicken Salad",
      },
    ],
    ru: [
      {
        label: "Салат с Тунцом",
      },
      {
        label: "Салат с Сыром Фета",
      },
      {
        label: "Салат с Курицей",
      },
    ],
  };

  const items = salad[i18n.language] || salad.az;
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
          price="4.9"
        />
      ))}
    </div>
  );
};

export default Salad;
