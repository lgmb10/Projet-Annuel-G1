import React from "react";
import { Drawer } from "../components/Drawer";
import { Pizzas } from "../containers/Menu/Pizzas";
import { TexMex } from "../containers/Menu/TexMex";
import { Desserts } from "../containers/Menu/Desserts";

export const Order = () => {
  return (
    <div className="flex">
      <Drawer />
      {/* <TexMex /> */}
      <Desserts />
    </div>
  );
};
