import React from "react";
import "./Drawer.scss";

import LogoStarPizza from "../../assets/logo-star-pizza.png";
import PizzaOffre from "../../assets/pizza-offres.png";
import NosPizzas from "../../assets/nos-pizzas.png";
import TexMex from "../../assets/tex-mex.png";
import Desserts from "../../assets/desserts.png";

const DRAWER_ELEMENTS = [
  {
    image: PizzaOffre,
    title: "OFFRES DU MOMENT",
  },
  {
    image: NosPizzas,
    title: "NOS PIZZAS",
  },
  {
    image: TexMex,
    title: "NOS TEX-MEX",
  },
  {
    image: Desserts,
    title: "NOS DESSERTS",
  },
];

const DrawerElements = ({ image, title }) => {
  return (
    <div className="flex-column jcc aic mt-3">
      <img src={image} />
      <p className="s-font-size bold">{title}</p>
    </div>
  );
};

export const Drawer = () => {
  return (
    <div className="drawer-container  ">
      <img src={LogoStarPizza} className="logo-star-pizza" />
      {DRAWER_ELEMENTS.map((element) => (
        <DrawerElements image={element.image} title={element.title} />
      ))}
    </div>
  );
};
