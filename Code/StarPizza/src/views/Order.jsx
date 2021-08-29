import React from "react";
import { Drawer } from "../components/Drawer";
import { Menu } from "../components/Menu/Menu";
import { Product } from "../components/Products/Products";
import { Pizzas } from "../containers/Menu/Pizzas";
import BgPizza from "../assets/bg-pizza.png";

export const Order = () => {
  return (
    <div className="flex">
      <Drawer />
      <Pizzas />
    </div>
  );
};
