import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
const Bread = () => {
  const { t, i18n } = useTranslation();

  const images = [
    "/img/GarlicBread.png",
    "/img/Simit.png",
    "/img/CheeseBite.png",
    "/img/PepperoniBite.png",
    "/img/ChickenBite.png",
  ];

  const bread = {
    az: [
      {
        label: "Pendirli Sarımsaqlı Çörək",
        desc: "Sobada hazırlanmış Pendirli Sarımsaq souslu çörək",
      },
      {
        label: "Simit",
        desc: "Mayonez, Mozzarella pendiri, Dilim Sucuk, Küncüt",
      },
      {
        label: "Pendirli Bite",
        desc: "Pizza Sousu, Mozzarella pendiri, Çeddar pendiri, Feta pendiri, Küncüt",
      },
      {
        label: "Pepperoni Bite",
        desc: "Pizza sousu, Mozzarella pendiri, Pepperoni, Küncüt",
      },
      {
        label: "Toyuq Bite",
        desc: "Pizza sousu, Mozzarella pendiri, Toyuq, Küncüt",
      },
    ],
    en: [
      {
        label: "Cheesy Garlic Bread",
        desc: "Oven Baked Cheesy Bread topped with Garlic sauce",
      },
      {
        label: "Simit",
        desc: "Mayonnaise, Mozzarella Cheese, Sliced Sausage, Sesame",
      },
      {
        label: "Cheese Bite",
        desc: "Pizza Sauce, Mozzarella Cheese, Cheddar Cheese, Feta Cheese, Sesame",
      },
      {
        label: "Pepperoni Bite",
        desc: "Pizza Sauce, Mozzarella Cheese, Pepperoni, Sesame",
      },
      {
        label: "Chicken Bite",
        desc: "Pizza Sauce, Mozzarella Cheese, Chicken, Sesame",
      },
    ],
    ru: [
      {
        label: "Сырный Хлеб с Чесночным Соусом",
        desc: "Запеченный Сырный хлеб с Чесночным соусом",
      },
      {
        label: "Симит",
        desc: "Майонез, Сыр Моцарелла, Нарезанная Колбаса, Кунжут",
      },
      {
        label: "Сырный Bite",
        desc: "Соус для пиццы, Сыр Моцарелла, Сыр чеддер, Сыр Фета, Кунжут",
      },
      {
        label: "Пепперони Bite",
        desc: "Соус для пиццы, Сыр Моцарелла, Пепперони, Кунжут",
      },
      {
        label: "Куриный Bite",
        desc: "Соус для пиццы, Сыр Моцарелла, Курица, Кунжут",
      },
    ],
  };

  const prices = [6.9, 6.9, 2.5, 2.5, 2.5];

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

export default Bread;
