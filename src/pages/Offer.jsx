import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Offer = () => {
  const { t, i18n } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const offers = {
    az: [
      {
        src: "/img/Yay-2025.png",
        label: "Orta pizza + Simit + 2 0.5 L içki Cəmi 20.50 AZN",
      },
      {
        src: "/img/mini lezzet.png",
        label: "2 Bite + 0.5L Fanta Cəmi 5.10 AZN",
      },
      {
        src: "/img/KomboMenu.png",
        label: "Kiçik pizza + Kartof Dilimləri + 0.5 L içki Cəmi 13.90 AZN",
      },
      {
        src: "/img/fit&fresh.png",
        label: "Orta boy pizza + Salat cəmi 18.30 AZN",
      },
      { src: "/img/2Small.png", label: "2 Kiçik pizza 17 AZN" },
      { src: "/img/LargeMenu.png", label: "1 Böyük Pizza + 1L içki 24.90 AZN" },
      {
        src: "/img/SuperOnline.png",
        label: "2 Orta Pizza + 1Lt içki 27.90 AZN",
      },
      { src: "/img/19,19.png", label: "2 Böyük Pizza 38 AZN" },
      { src: "/img/44-azn.png", label: "4 Orta Pizza 44 AZN" },
    ],
    en: [
      {
        src: "/img/Yay-2025-Eng.png",
        label: "Orta pizza + Simit + 2 0.5 L Drinks for 20.50 AZN",
      },
      {
        src: "/img/mini lezzet-eng.png",
        label: "2 Bites + 0.5L Fanta for 5.10 AZN",
      },
      {
        src: "/img/KomboMenu-en.png",
        label: "Small pizza + Potato Wedges + 0.5 L Drinks for 13.90 AZN",
      },
      {
        src: "/img/fit&fresh-en.png",
        label: "Medium pizza + Salad for 18.30 AZN",
      },
      { src: "/img/2Small-en.png", label: "2 Small Pizzas for 17 AZN" },
      {
        src: "/img/LargeMenu-eng.png",
        label: "1 Large Pizza + 1L Drink for 24.90 AZN",
      },
      {
        src: "/img/SuperOnline-eng.png",
        label: "2 Medium Pizzas + 1Lt Drink 27.90 AZN",
      },
      { src: "/img/19,19-en.png", label: "2 Large Pizzas for 38 AZN" },
      { src: "/img/44-azn-Eng.png", label: "4 Medium Pizzas for 44 AZN" },
    ],
    ru: [
      {
        src: "/img/Yay-2025-Rus.png",
        label: "Средние пицца + симит + 2 0.5 Л напиток за 20.50 AZN",
      },
      {
        src: "/img/mini lezzet-rus.png",
        label: "2 Байт + 0.5Л Фанта за 5.10 AZN",
      },
      {
        src: "/img/KomboMenu-rus.png",
        label:
          "Маленькая пицца + Картофельные Дольки + 0.5 Л напиток за 13.90 AZN",
      },
      {
        src: "/img/fit&fresh-rus.png",
        label: "Средняя Пицца + Салат за 18.30 AZN",
      },
      { src: "/img/2Small-rus.png", label: "2 Маленькие Пиццы 17 ман." },
      {
        src: "/img/LargeMenu-rus.png",
        label: "1 Большая Фаворит Пиццы + 1L Пить за 24.90 ман.",
      },
      {
        src: "/img/SuperOnline-rus.png",
        label: "2 Средние Пиццы + 1Л Напиток за 27.90 ман.",
      },
      { src: "/img/19,19-rus.png", label: "2 Большие Пиццы 38 ман." },
      { src: "/img/44-azn-rus.png", label: "4 Средние Пиццы за 44 ман." },
    ],
  };

  const items = offers[i18n.language] || offers.az;

  return (
    <div className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 my-17 mx-9 ${
          scrollY >= 103 ? "mt-[180px]" : ""
        }`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-2xl shadow-lg inset-shadow-sm cursor-pointer overflow-hidden transition-transform duration-600 hover:scale-105"
        >
          <img src={item.src} alt={item.label} className="w-full" />
          <div className="flex justify-between w-full px-2 py-3 gap-1 font-[700] text-[21px] font-[Poppins]">
            <p>{item.label}</p>
            <i className="fa-solid fa-heart text-[30px] text-gray-300"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
