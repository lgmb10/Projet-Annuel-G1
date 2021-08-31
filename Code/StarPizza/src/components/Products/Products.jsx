import React from "react";

import "./Products.scss";

export const Product = ({ price, image, onClick, title }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="product-container flex-column jcc aic ml-2 mb-2"
      >
        <img src={image} className="adapt-img" />
        <p className="title bold">{title}</p>
        <div className="price flex jcc aic">
          <p className="bold">{price}€</p>
        </div>
      </div>
    </>
  );
};
