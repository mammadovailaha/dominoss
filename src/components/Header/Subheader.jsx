import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const categories = [
  { label: "Kampaniyalar", name: "campaign", path: "/offers" },
  { label: "Pizza", name: "pizza", path: "/pizza" },
  { label: "Çörək", name: "bread", path: "/bread" },
  { label: "Toyuq", name: "chicken", path: "/chicken" },
  { label: "Salat", name: "salad", path: "/salad" },
  { label: "İçki", name: "drink", path: "/drinks" },
  { label: "Sous", name: "dip", path: "/dips" },
  { label: "Şirniyyat", name: "dessert", path: "/desserts" },
];

const getIcon = (name, isActive) => {
  const img = {
    campaign: {
      active: "/img/red-percentage.webp",
      inactive: "/img/red-percentage.webp",
    },
    pizza: {
      active: "/img/pizza-red.png",
      inactive: "/img/pizza-nav.png",
    },
    bread: {
      active: "/img/bread-red.png",
      inactive: "/img/bread-nav.png",
    },
    chicken: {
      active: "/img/chicken-red.png",
      inactive: "/img/chicken-nav.png",
    },
    salad: {
      active: "/img/salad-red.png",
      inactive: "/img/salad-nav.png",
    },
    drink: {
      active: "/img/drink-red.png",
      inactive: "/img/drink-nav.png",
    },
    dip: {
      active: "/img/dip-red.png",
      inactive: "/img/dip-nav.png",
    },
    dessert: {
      active: "/img/dessert-red.png",
      inactive: "/img/dessert-nav.png",
    },
  };

  return img[name] ? (isActive ? img[name].active : img[name].inactive) : "";
};

const Subheader = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("Kampaniyalar");
  const navigate = useNavigate();

  return (
    <div className="w-[75%] bg-transparent overflow-x-hidden flex justify-center items-center">
      <div className="overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-9 px-4 py-3 font-[Poppins]">
          {categories.map((item) => {
            const isCampaign = item.name === "campaign";
            const isActive = active === item.label;

            return (
              <button
                key={item.label}
                onClick={() => {
                  if (!isCampaign) {
                    setActive(item.label);
                  }
                  navigate(item.path);
                }}
                className={`flex flex-col items-center gap-1 flex-shrink-0 snap-start px-4 py-2 text-[20px] rounded-full transition cursor-pointer
                  ${
                    isCampaign
                      ? "text-red-600 animate-blink"
                      : isActive
                      ? "text-red-600"
                      : "text-gray-500"
                  }
                `}
              >
                <img
                  src={getIcon(item.name, isCampaign ? true : isActive)}
                  alt={item.label}
                  className="w-10 h-10"
                />
                {t(`categories.${item.name}`)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subheader;
