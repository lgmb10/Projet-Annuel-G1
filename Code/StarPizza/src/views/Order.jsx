import React from "react";
import { Drawer } from "../components/Drawer";
import { Menu } from "../components/Menu/Menu";
import { Product } from "../components/Products/Products";

import BgPizza from "../assets/bg-pizza.png";
import { PIZZAS } from "../components/Menu/Menu.service";

export const Order = () => {
  return (
    <div className="flex">
      <Drawer />
      <Menu backgroundImage={BgPizza} title="NOS PIZZAS">
        {PIZZAS.map((pizza) => (
          <Product
            price={pizza.price}
            image={pizza.image}
            pizza={pizza.title}
          />
        ))}
      </Menu>
    </div>
  );
};
