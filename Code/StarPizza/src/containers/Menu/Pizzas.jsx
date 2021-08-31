import React from "react";
import { atom, useAtom } from "jotai";

import { PIZZAS } from "./Menu.service";

import { Product } from "../../components/Products/Products";
import { Menu } from "../../components/Menu/Menu";

import BgPizza from "../../assets/bg-pizza.png";

export const totalPriceAtom = atom(null);

export const Pizzas = () => {
  const [price, setPrice] = useAtom(totalPriceAtom);
  return (
    <Menu backgroundImage={BgPizza} title="NOS PIZZAS">
      {PIZZAS.map((pizza, index) => (
        <Product
          key={index}
          price={pizza.price}
          image={pizza.image}
          title={pizza.title}
          onClick={() => {
            setPrice(price + pizza.price);
          }}
        />
      ))}
    </Menu>
  );
};
