import React from "react";

import "./OrderInfo.scss";

export const OrderInfo = ({ product, total }) => {
  return (
    <div className="orderInfo-container">
      <p className="bold l-font-size title">VOTRE COMMANDE</p>
      <div className="order-container">
        <p>{product}</p>
        <button className="button">
          <p className="l-font-size bold">Total : {total}€</p>
        </button>
      </div>
    </div>
  );
};
