import React from "react";
import LogoStarPizza from "../assets/logo-star-pizza.png";
import "./Views.scss";

export const Invoice = () => {
  return (
    <div className="flex-column jcc aic">
      <img src={LogoStarPizza} />
      <p className="xl-font-size bold tac">
        MERCI DE VOTRE COMMANDE <br /> VOUS AVEZ LE NUMÉRO:
      </p>
      <div className="invoice-container flex jcc aic">N° 14</div>
      <p className="xl-font-size bold mt-4 purple">
        Bon appétit chez Star Pizza !
      </p>
    </div>
  );
};
