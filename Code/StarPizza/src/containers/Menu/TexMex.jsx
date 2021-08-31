import React from "react";
import { useAtom } from "jotai";

import { TEX_MEX } from "./Menu.service";
import { totalPriceAtom } from "./Pizzas";

import { Product } from "../../components/Products/Products";
import { Menu } from "../../components/Menu/Menu";

import BgTexmex from "../../assets/bg-texmex.png";

export const TexMex = () => {
  const [price, setPrice] = useAtom(totalPriceAtom);

  return (
    <Menu backgroundImage={BgTexmex} title="NOS TEX-MEX">
      {TEX_MEX.map((texmex, index) => (
        <Product
          key={index}
          price={texmex.price}
          image={texmex.image}
          title={texmex.title}
          onClick={() => {
            setPrice(price + texmex.price);
          }}
        />
      ))}
    </Menu>
  );
};
