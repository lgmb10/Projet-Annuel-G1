import React from "react";

import "./OrderInfo.scss";

export const OrderInfo = ({ total }) => {
  return (
    <div className="orderInfo-container">
      <p className="bold l-font-size title">VOTRE COMMANDE</p>
      <div className="order-container">
        <button className="button">
          <p className="l-font-size bold">Total : {total}€</p>
        </button>
      </div>
    </div>
  );
};
