import React from "react";
import { PIZZAS } from "./Menu.service";
import BgPizza from "../../assets/bg-pizza.png";
import { Product } from "../../components/Products/Products";
import { Menu } from "../../components/Menu/Menu";

export const Pizzas = () => {
  return (
    <Menu backgroundImage={BgPizza} title="NOS PIZZAS">
      {PIZZAS.map((pizza) => (
        <Product price={pizza.price} image={pizza.image} pizza={pizza.title} />
      ))}
    </Menu>
  );
};
