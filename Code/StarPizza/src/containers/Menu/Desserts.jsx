import React from "react";
import { useAtom } from "jotai";
import { totalPriceAtom } from "./Pizzas";
import { DESSERTS } from "./Menu.service";

import { Product } from "../../components/Products/Products";
import { Menu } from "../../components/Menu/Menu";

import BgDessert from "../../assets/bg-dessert.png";

export const Desserts = () => {
  const [price, setPrice] = useAtom(totalPriceAtom);
  return (
    <Menu backgroundImage={BgDessert} title="NOS DESSERTS">
      {DESSERTS.map((dessert, index) => (
        <Product
          key={index}
          price={dessert.price}
          image={dessert.image}
          title={dessert.title}
          onClick={() => {
            setPrice(price + dessert.price + `\n`);
          }}
        />
      ))}
    </Menu>
  );
};
