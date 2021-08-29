import React from "react";
import "./HomepageButton.scss";

export const HomepageButton = ({ bgColor, onClick, image, title }) => {
  return (
    <button
      style={{ background: bgColor }}
      className="button-container flex jcc aic mt-4 mb-4"
      onClick={onClick}
    >
      <img src={image} className="mr-2" />
      <p className="l-font-size bold">{title}</p>
    </button>
  );
};
