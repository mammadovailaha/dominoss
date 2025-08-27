import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
const Chicken = () => {
  const { t, i18n } = useTranslation();

  const images = [
    "/img/Kickers.png",
    "/img/Wings-3pcs.png",
    "/img/Wings-5pcs.png",
    "/img/Wings-8pcs.png",
    "/img/Strips-3pcs.png",
    "/img/Strips-5pcs.png",
    "/img/Crispy Chicken.png",
    "/img/fri.gif",
  ];
const prices = [9.90, 4.90, 6.90, 9.90, 4.20, 5.90, 3.90, 4.90];
  const bread = {
    az: [
      {
        label: "Çiken Kikers",
        desc: "Sobada hazırlanmış 200 qr Xırçıltılı örtükdə Toyuq Döşü + 100 qr Kartof dilimləri ",
      },
      {
        label: "Çiken Wings (3 ədəd)",
        desc: "Sobada hazırlanmış Marinə olunmuş Toyuq Qanadları",
      },
      {
        label: "Çiken Wings (5 ədəd)",
        desc: "Sobada hazırlanmış Marinə olunmuş Toyuq Qanadları",
      },
      {
        label: "Çiken Wings (8 ədəd)",
        desc: "Sobada hazırlanmış Marinə olunmuş Toyuq Qanadları",
      },
      {
        label: "Çiken Strips (3 ədəd)",
        desc: "Sobada hazırlanmış Toyuq fileləri",
      },
      {
        label: "Çiken Strips (5 ədəd)",
        desc: "Sobada hazırlanmış Toyuq fileləri",
      },
      {
        label: "Xırçıltılı Toyuq Pops",
        desc: "Sobada hazırlanmış 100 qr ədviyyatlı Toyuq topları",
      },
      {
        label: "Kartof Dilimləri",
        desc: "Sobada hazırlanmış Kartof Dilimləri  + ketçup",
      },
    ],
    en: [
      {
        label: "Chicken Kickers",
        desc: "200 g pieces of Chicken breast in Crispy coating Baked in Oven + 100g Potato Wedges ",
      },
      {
        label: "Chicken Wings (3 pcs)",
        desc: "Marinated Chicken Wings Baked in Oven",
      },
      {
        label: "Chicken Wings (5 pcs)",
        desc: "Marinated Chicken Wings Baked in Oven",
      },
      {
        label: "Chicken Wings (8 pcs)",
        desc: "Marinated Chicken Wings Baked in Oven ",
      },
      {
        label: "Chicken Strips (3 pcs)",
        desc: "Oven-baked chicken fillets",
      },
      {
        label: "Chicken Strips (5 pcs)",
        desc: "Oven-baked chicken fillets",
      },
      {
        label: "Crispy Chicken Pops",
        desc: "100 g of Spicy Chicken Balls Baked in Oven",
      },
      {
        label: "Potato Wedges",
        desc: "Oven Baked Potato Wedges + Ketchup",
      },
    ],
    ru: [
      {
        label: "Куриные Кикерсы",
        desc: "200 г кусочков Куриной грудки в Xрустящей панировке + 100 г Картофельные дольки Запеченные в Духовке ",
      },
      {
        label: "Куриные Крылышки (3 шт)",
        desc: "Маринованных Куриных Крылышек",
      },
      {
        label: "Куриные Крылышки (5 шт)",
        desc: "Маринованных Куриных Крылышек ",
      },
      {
        label: "Куриные Крылышки (8 шт)",
        desc: "Маринованных Куриных Крылышек",
      },
      {
        label: "Куриные стрипсы (3 шт)",
        desc: "Запечённые куриные филе в духовке",
      },
      {
        label: "Куриные стрипсы (5 шт)",
        desc: "Запечённые куриные филе в духовке",
      },
      {
        label: "Xрустящие Куриные Попсы",
        desc: "100 г пряных Куриных шариков + Запеченные в печи",
      },
      {
        label: "Картофельные Дольки",
        desc: "Запеченные Картофельные Дольки + Кетчуп",
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

export default Chicken;
