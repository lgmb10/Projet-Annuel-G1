import React from "react";
import { useAtom } from "jotai";

import { Drawer } from "../components/Drawer";
import { Pizzas } from "../containers/Menu/Pizzas";
import { TexMex } from "../containers/Menu/TexMex";
import { valueAtom } from "../components/Drawer";
import { Desserts } from "../containers/Menu/Desserts";
import { OrderInfo } from "../components/OrderInfo/OrderInfo";
import { totalPriceAtom } from "../containers/Menu/Pizzas";

export const Order = () => {
  const [menu] = useAtom(valueAtom);
  const [price] = useAtom(totalPriceAtom);
  return (
    <div className="flex">
      <Drawer />
      <div className="flex-column">
        {menu === "pizzas" ? (
          <Pizzas />
        ) : menu === "texmex" ? (
          <TexMex />
        ) : menu === "desserts" ? (
          <Desserts />
        ) : (
          <Pizzas />
        )}
        <OrderInfo total={price} />
      </div>
    </div>
  );
};
