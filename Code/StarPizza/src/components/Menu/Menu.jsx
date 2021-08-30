import React from "react";
import "./Menu.scss";
import { OrderInfo } from "../../components/OrderInfo/OrderInfo";

export const Menu = ({
  backgroundImage,
  title,
  children,
  price,
  orderCard,
}) => {
  return (
    <div className="flex">
      <div className="flex-column">
        <img src={backgroundImage} className="background-pizza" />
        <p className="ml-1 bold italic purple xl-font-size">{title}</p>
        <div className=" pizzas-container flex">{children}</div>
        <OrderInfo price={price} children={orderCard} />
      </div>
    </div>
  );
};
