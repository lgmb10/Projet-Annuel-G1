import React from "react";
import { atom, useAtom } from "jotai";

import { Drawer } from "../components/Drawer";
import { Menu } from "../components/Menu/Menu";
import { Product } from "../components/Products/Products";
import { Pizzas } from "../containers/Menu/Pizzas";
import BgPizza from "../assets/bg-pizza.png";
import { TexMex } from "../containers/Menu/TexMex";
import { NavLink } from "react-router-dom";
import { valueAtom } from "../components/Drawer";
import { Desserts } from "../containers/Menu/Desserts";

export const Order = () => {
  const [menu] = useAtom(valueAtom);
  return (
    <div className="flex">
      <Drawer />
      {menu === "pizzas" ? (
        <Pizzas />
      ) : menu === "texmex" ? (
        <TexMex />
      ) : menu === "desserts" ? (
        <Desserts />
      ) : null}
    </div>
  );
};
