import React from "react";

import "./OrderCard.scss";

export const OrderCard = ({ quantity, name }) => {
  return (
    <div className="card">
      <p>
        {quantity} x {name}
      </p>
    </div>
  );
};
