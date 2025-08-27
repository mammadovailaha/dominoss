// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import Card from "../components/Card";
// const Dessert = () => {
//   const { t, i18n } = useTranslation();

//   const images = [
//     "/img/GarlicBread.png",
//     "/img/Simit.png",
//     "/img/CheeseBite.png",
//     "/img/PepperoniBite.png",
//     "/img/ChickenBite.png",
//   ];
// const drink=["Coca-Cola","Fanta","Coca-Cola Zero","Sprite","Milla Ayran Mint","Milla Ayran","Cappy Meyvə Şirəsi"]
//   const prices = [6.9, 6.9, 2.5, 2.5, 2.5];
//   const bread = {
//     az: [
//       {
//         label: "Coca-Cola",
//         desc: "",
//       },
//       {
//         label: "Fanta",
//         desc: "",
//       },
//       {
//         label: "Coca-Cola Zero",
//         desc: "",
//       },
//       {
//         label: "Sprite",
//         desc: "",
//       },
//       {
//         label: "Milla Ayran Mint",
//         desc: "",
//       },
//       {
//         label: "Milla Ayran",
//         desc: "",
//       },
//       {
//         label: "Cappy Meyvə Şirəsi",
//         desc: "",
//       },
//       {
//         label: "Fuse tea",
//         desc: "",
//       },
//       {
//         label: "Bonaqua Su",
//         desc: "",
//       },
//     ],
//     en: [
//       {
//         label: "Coca-Cola",
//         desc: "",
//       },
//       {
//         label: "Fanta",
//         desc: "",
//       },
//       {
//         label: "Coca-Cola Zero",
//         desc: "",
//       },
//       {
//         label: "Sprite",
//         desc: "",
//       },
//       {
//         label: "Milla Ayran Mint",
//         desc: "",
//       },
//       {
//         label: "Milla Ayran Mint",
//         desc: "",
//       },
//       {
//         label: "Cappy Juice",
//         desc: "",
//       },
//       {
//         label: "Fuse tea",
//         desc: "",
//       },
//       {
//         label: "Bonaqua Water",
//         desc: "",
//       },
//     ],
//     ru: [
//       {
//         label: "Coca-Cola",
//         desc: "",
//       },
//       {
//         label: "Fanta",
//         desc: "",
//       },
//       {
//         label: "Coca-Cola Zero",
//         desc: "",
//       },
//       {
//         label: "Sprite",
//         desc: "",
//       },
//       {
//         label: "Milla Айран",
//         desc: "",
//       },
//       {
//         label: "Milla Айран",
//         desc: "",
//       },
//       {
//         label: "Cappy сок",
//         desc: "",
//       },
//       {
//         label: "Fuse tea",
//         desc: "",
//       },
//       {
//         label: "Bonaqua Вода",
//         desc: "",
//       },
      
//     ],
//   };

//   const items = bread[i18n.language] || bread.az;
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div
//       className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 my-17 mx-15 ${
//         scrollY >= 103 ? "mt-[180px]" : ""
//       }`}
//     >
//       {items.map((item, index) => (
//         <Card
//           key={index}
//           image={images[index]}
//           label={item.label}
//           desc={item.desc}
//           price={prices[index]}
//         />
//       ))}
//     </div>
//   );
// };

// export default Dessert;
