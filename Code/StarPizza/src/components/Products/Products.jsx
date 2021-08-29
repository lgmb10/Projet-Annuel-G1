import React from "react";

import "./Products.scss";

export const Product = ({ price, image, onClick, pizza, className }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="product-container flex-column jcc aic ml-2 mb-2"
      >
        <img src={image} className={className} />
        <p className="title bold">{pizza}</p>
        <div className="price flex jcc aic">
          <p className="bold">{price}€</p>
        </div>
      </div>
    </>
  );
};
