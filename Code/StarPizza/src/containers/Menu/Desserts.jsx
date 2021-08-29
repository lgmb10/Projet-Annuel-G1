import React from "react";
import { DESSERTS } from "./Menu.service";
import BgDessert from "../../assets/bg-dessert.png";
import { Product } from "../../components/Products/Products";
import { Menu } from "../../components/Menu/Menu";

export const Desserts = () => {
  return (
    <Menu backgroundImage={BgDessert} title="NOS DESSERTS">
      {DESSERTS.map((dessert, index) => (
        <Product
          key={index}
          price={dessert.price}
          image={dessert.image}
          title={dessert.title}
        />
      ))}
    </Menu>
  );
};
