import React from "react";
import { atom, useAtom } from "jotai";
import "./Drawer.scss";

import LogoStarPizza from "../../assets/logo-star-pizza.png";
import PizzaOffre from "../../assets/pizza-offres.png";
import NosPizzas from "../../assets/nos-pizzas.png";
import TexMex from "../../assets/tenders.png";
import Desserts from "../../assets/desserts.png";

const DRAWER_ELEMENTS = [
  {
    image: PizzaOffre,
    title: "OFFRES DU MOMENT",
    value: "offres",
  },
  {
    image: NosPizzas,
    title: "NOS PIZZAS",
    value: "pizzas",
  },
  {
    image: TexMex,
    title: "NOS TEX-MEX",
    value: "texmex",
  },
  {
    image: Desserts,
    title: "NOS DESSERTS",
    value: "desserts",
  },
];

const DrawerElements = ({ image, title, onClick }) => {
  return (
    <div className="flex-column jcc aic mt-3" onClick={onClick}>
      <img src={image} />
      <p className="s-font-size bold">{title}</p>
    </div>
  );
};

export const valueAtom = atom("");

export const Drawer = () => {
  const [value, setValue] = useAtom(valueAtom);
  return (
    <div className="drawer-container">
      <img src={LogoStarPizza} className="logo-star-pizza" />
      {DRAWER_ELEMENTS.map((element, index) => (
        <DrawerElements
          key={index}
          image={element.image}
          title={element.title}
          onClick={() => {
            setValue(element.value);
          }}
        />
      ))}
    </div>
  );
};
