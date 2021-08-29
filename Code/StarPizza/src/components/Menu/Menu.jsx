import React from "react";
import "./Menu.scss";

export const Menu = ({ backgroundImage, children, menu }) => {
  return (
    <div className="flex">
      <div className="flex-column">
        <img src={backgroundImage} className="background-pizza" />
        <p className="ml-1 bold italic purple xl-font-size">{menu}</p>
        <div className=" pizzas-container flex">{children}</div>
      </div>
    </div>
  );
};
