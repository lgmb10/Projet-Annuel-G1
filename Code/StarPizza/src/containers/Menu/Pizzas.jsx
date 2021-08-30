import React from "react";
import { PIZZAS } from "./Menu.service";
import BgPizza from "../../assets/bg-pizza.png";
import { Product } from "../../components/Products/Products";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { Menu } from "../../components/Menu/Menu";

export const Pizzas = () => {
  return (
    <Menu backgroundImage={BgPizza} title="NOS PIZZAS">
      {PIZZAS.map((pizza, index) => (
        <Product
          key={index}
          price={pizza.price}
          image={pizza.image}
          title={pizza.title}
        />
      ))}
    </Menu>
  );
};
