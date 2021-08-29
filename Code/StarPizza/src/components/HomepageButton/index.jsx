import React from "react";
import "./HomepageButton.scss";

export const HomepageButton = ({ bgColor, image, title }) => {
  return (
    <button
      style={{ background: bgColor }}
      className="button-container flex jcc aic mt-4 mb-4"
    >
      <img src={image} className="mr-2" />
      <p className="l-font-size bold">{title}</p>
    </button>
  );
};
