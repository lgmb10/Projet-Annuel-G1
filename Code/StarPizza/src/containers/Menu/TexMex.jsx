import React from "react";
import { TEX_MEX } from "./Menu.service";
import BgTexmex from "../../assets/bg-texmex.png";
import { Product } from "../../components/Products/Products";
import { Menu } from "../../components/Menu/Menu";

export const TexMex = () => {
  return (
    <Menu backgroundImage={BgTexmex} title="NOS TEX-MEX">
      {TEX_MEX.map((texmex, index) => (
        <Product
          key={index}
          price={texmex.price}
          image={texmex.image}
          title={texmex.title}
        />
      ))}
    </Menu>
  );
};
