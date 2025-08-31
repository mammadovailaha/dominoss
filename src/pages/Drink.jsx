import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
const Drink = () => {
  const { t, i18n } = useTranslation();
  const drinks = {
    az: [
      {
        label: "Coca-Cola",
        sizes: {
          "330 ML": { img: "/img/coca-330.png", price: 3.0 },
          "500 ML": { img: "/img/coca-500.png", price: 2.5 },
          "1 L": { img: "/img/coca-1l.png", price: 3.5 },
        },
      },
      {
        label: "Fanta",
        sizes: {
          "330 ML": { img: "/img/fanta-330.png", price: 3.0 },
          "500 ML": { img: "/img/fanta-500.png", price: 2.5 },
          "1 L": { img: "/img/fanta-1l.png", price: 3.5 },
        },
      },
      {
        label: "Coca-Cola Zero",
        sizes: {
          "330 ML": { img: "/img/zero-330.png", price: 3.0 },
          "500 ML": { img: "/img/zero-500.png", price: 2.5 },
          "1 L": { img: "/img/zero-1l.png", price: 3.5 },
        },
      },
      {
        label: "Sprite",
        sizes: {
          "330 ML": { img: "/img/sprite-330.png", price: 3.0 },
          "500 ML": { img: "/img/sprite-500.png", price: 2.5 },
          "1 L": { img: "/img/sprite-1l.png", price: 3.5 },
        },
      },
      {
        label: "Milla Ayran Mint",
        sizes: {
          "200 ML": { img: "/img/ayran-mint-200.png", price: 1.7 },
          "300 ML": { img: "/img/ayran-mint-300.png", price: 2.2 },
        },
      },
      {
        label: "Milla Ayran",
        sizes: {
          "200 ML": { img: "/img/ayran-200.png", price: 1.7 },
          "300 ML": { img: "/img/ayran-300.png", price: 2.2 },
        },
      },
      {
        label: "Cappy Meyvə Şirəsi",
        sizes: {
          "Ərik": { img: "/img/cappy-1.png", price: 3 },
          "Albalı": { img: "/img/cappy-2.png", price: 3 },
          "Multivitamin": { img: "/img/cappy-3.png", price: 3 },
        },
      },
      {
        label: "Fuse tea",
        sizes: {
          "Limon": { img: "/img/fuse-1.png", price: 3 },
          "Manqo Ananas": { img: "/img/fuse-2.png", price: 3 },
          "Şaftalı": { img: "/img/fuse-3.png", price: 3 },
        },
      },
      {
        label: "Bonaqua Su",
        sizes: {
          "Qazsız": { img: "/img/bonaqua-1.png", price: 1.0 },
          "Qazlı": { img: "/img/bonaqua-2.png", price: 1.0 },
        },
      },
    ],

    en: [
      {
        label: "Coca-Cola",
        sizes: {
          "330 ML": { img: "/img/coca-330.png", price: 3.0 },
          "500 ML": { img: "/img/coca-500.png", price: 2.5 },
          "1 L": { img: "/img/coca-1l.png", price: 3.5 },
        },
      },
      {
        label: "Fanta",
        sizes: {
          "330 ML": { img: "/img/fanta-330.png", price: 3.0 },
          "500 ML": { img: "/img/fanta-500.png", price: 2.5 },
          "1 L": { img: "/img/fanta-1l.png", price: 3.5 },
        },
      },
      {
        label: "Coca-Cola Zero",
        sizes: {
          "330 ML": { img: "/img/zero-330.png", price: 3.0 },
          "500 ML": { img: "/img/zero-500.png", price: 2.5 },
          "1 L": { img: "/img/zero-1l.png", price: 3.5 },
        },
      },
      {
        label: "Sprite",
        sizes: {
          "330 ML": { img: "/img/sprite-330.png", price: 3.0 },
          "500 ML": { img: "/img/sprite-500.png", price: 2.5 },
          "1 L": { img: "/img/sprite-1l.png", price: 3.5 },
        },
      },
      {
        label: "Milla Ayran Mint",
        sizes: {
          "200 ML": { img: "/img/ayran-mint-200.png", price: 1.7 },
          "300 ML": { img: "/img/ayran-mint-300.png", price: 2.2 },
        },
      },
      {
        label: "Milla Ayran",
        sizes: {
          "200 ML": { img: "/img/ayran-200.png", price: 1.7 },
          "300 ML": { img: "/img/ayran-300.png", price: 2.2 },
        },
      },
      {
        label: "Cappy Juice",
        sizes: {
          "Ərik": { img: "/img/cappy-1.png", price: 3 },
          "Albalı": { img: "/img/cappy-2.png", price: 3 },
          "Multivitamin": { img: "/img/cappy-3.png", price: 3 },
        },
      },
      {
        label: "Fuse tea",
        sizes: {
          "Limon": { img: "/img/fuse-1.png", price: 3 },
          "Manqo Ananas": { img: "/img/fuse-2.png", price: 3 },
          "Şaftalı": { img: "/img/fuse-3.png", price: 3 },
        },
      },
      {
        label: "Bonaqua Water",
        sizes: {
          "Qazsız": { img: "/img/bonaqua-1.png", price: 1.0 },
          "Qazlı": { img: "/img/bonaqua-2.png", price: 1.0 },
        },
      },
    ],

    ru: [
      {
        label: "Coca-Cola",
        sizes: {
          "330 ML": { img: "/img/coca-330.png", price: 3.0 },
          "500 ML": { img: "/img/coca-500.png", price: 2.5 },
          "1 L": { img: "/img/coca-1l.png", price: 3.5 },
        },
      },
      {
        label: "Fanta",
        sizes: {
          "330 ML": { img: "/img/fanta-330.png", price: 3.0 },
          "500 ML": { img: "/img/fanta-500.png", price: 2.5 },
          "1 L": { img: "/img/fanta-1l.png", price: 3.5 },
        },
      },
      {
        label: "Coca-Cola Zero",
        sizes: {
          "330 ML": { img: "/img/zero-330.png", price: 3.0 },
          "500 ML": { img: "/img/zero-500.png", price: 2.5 },
          "1 L": { img: "/img/zero-1l.png", price: 3.5 },
        },
      },
      {
        label: "Sprite",
        sizes: {
          "330 ML": { img: "/img/sprite-330.png", price: 3.0 },
          "500 ML": { img: "/img/sprite-500.png", price: 2.5 },
          "1 L": { img: "/img/sprite-1l.png", price: 3.5 },
        },
      },
      {
        label: "Milla Айран Мята",
        sizes: {
          "200 ML": { img: "/img/ayran-mint-200.png", price: 1.7 },
          "300 ML": { img: "/img/ayran-mint-300.png", price: 2.2 },
        },
      },
      {
        label: "Milla Айран",
        sizes: {
          "200 ML": { img: "/img/ayran-200.png", price: 1.7 },
          "300 ML": { img: "/img/ayran-300.png", price: 2.2 },
        },
      },
      {
        label: "Cappy сок",
        sizes: {
          "Ərik": { img: "/img/cappy-1.png", price: 3 },
          "Albalı": { img: "/img/cappy-2.png", price: 3 },
          "Multivitamin": { img: "/img/cappy-3.png", price: 3 },
        },
      },
      {
        label: "Fuse tea",
        sizes: {
          "Limon": { img: "/img/fuse-1.png", price: 3 },
          "Manqo Ananas": { img: "/img/fuse-2.png", price: 3 },
          "Şaftalı": { img: "/img/fuse-3.png", price: 3 },
        },
      },
      {
        label: "Bonaqua Вода",
        sizes: {
          "Qazsız": { img: "/img/bonaqua-1.png", price: 1.0 },
          "Qazlı": { img: "/img/bonaqua-2.png", price: 1.0 },
        },
      },
    ],
  };

  const items = drinks[i18n.language] || drinks.az;
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
      {items.map((drink, index) => (
        <Card key={index} drink={drink} />
      ))}
    </div>
  );
};

export default Drink;
