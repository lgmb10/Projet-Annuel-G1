import React from "react";

import "./OrderInfo.scss";

export const OrderInfo = ({ price, children }) => {
  return (
    <div className="orderInfo-container">
      <p className="bold l-font-size title">VOTRE COMMANDE</p>
      <div className="order-container">
        {children}
        <button className="button">
          <p className="l-font-size bold">Total :{price}€</p>
        </button>
      </div>
    </div>
  );
};

// OrderInfo.defaultProps = {
//   children: "Aucun article",
// };

// export default OrderInfo;
