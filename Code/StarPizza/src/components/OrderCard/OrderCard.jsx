import React from "react";

import "./OrderCard.scss";

export const OrderCard = ({ quantity, name, supplement }) => {
  return (
    <div className="card">
      <p>
        {quantity}x {name}
      </p>
      <p>Suppléments : {supplement}</p>
    </div>
  );
};
