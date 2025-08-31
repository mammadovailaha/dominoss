import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
const Bread = () => {
  const { i18n } = useTranslation();

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
        id: 1,
        label: "Pendirli Sarımsaqlı Çörək",
        desc: "Sobada hazırlanmış Pendirli Sarımsaq souslu çörək",
      },
      {
        id: 2,
        label: "Simit",
        desc: "Mayonez, Mozzarella pendiri, Dilim Sucuk, Küncüt",
      },
      {
        id: 3,
        label: "Pendirli Bite",
        desc: "Pizza Sousu, Mozzarella pendiri, Çeddar pendiri, Feta pendiri, Küncüt",
      },
      {
        id: 4,
        label: "Pepperoni Bite",
        desc: "Pizza sousu, Mozzarella pendiri, Pepperoni, Küncüt",
      },
      {
        id: 5,
        label: "Toyuq Bite",
        desc: "Pizza sousu, Mozzarella pendiri, Toyuq, Küncüt",
      },
    ],
    en: [
      {
        id: 1,
        label: "Cheesy Garlic Bread",
        desc: "Oven Baked Cheesy Bread topped with Garlic sauce",
      },
      {
        id: 2,
        label: "Simit",
        desc: "Mayonnaise, Mozzarella Cheese, Sliced Sausage, Sesame",
      },
      {
        id: 3,
        label: "Cheese Bite",
        desc: "Pizza Sauce, Mozzarella Cheese, Cheddar Cheese, Feta Cheese, Sesame",
      },
      {
        id: 4,
        label: "Pepperoni Bite",
        desc: "Pizza Sauce, Mozzarella Cheese, Pepperoni, Sesame",
      },
      {
        id: 5,
        label: "Chicken Bite",
        desc: "Pizza Sauce, Mozzarella Cheese, Chicken, Sesame",
      },
    ],
    ru: [
      {
        id: 1,
        label: "Сырный Хлеб с Чесночным Соусом",
        desc: "Запеченный Сырный хлеб с Чесночным соусом",
      },
      {
        id: 2,
        label: "Симит",
        desc: "Майонез, Сыр Моцарелла, Нарезанная Колбаса, Кунжут",
      },
      {
        id: 3,
        label: "Сырный Bite",
        desc: "Соус для пиццы, Сыр Моцарелла, Сыр чеддер, Сыр Фета, Кунжут",
      },
      {
        id: 4,
        label: "Пепперони Bite",
        desc: "Соус для пиццы, Сыр Моцарелла, Пепперони, Кунжут",
      },
      {
        id: 5,
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
          key={item.id}
          id={item.id}
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
