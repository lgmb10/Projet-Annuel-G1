import React from "react";

export const Product = ({ price, image, title, onClick }) => {
    return (
        <div onClick={onClick} className="product-container">
            <img src={image} className="" />
            <p className="title bold">{title}</p>
            <p className="price bold">{price}€</p>
        </div>
    );
  };
  