import React from "react";
import { useHistory } from "react-router";

import { HomepageButton } from "../components/HomepageButton";

import LogoEfficom from "../assets/logo-EFFICOM.png";
import LogoStarPizza from "../assets/logo-star-pizza.png";

export const Homepage = () => {
  let history = useHistory();

  return (
    <div className="flex-column jcc aic">
      <img src={LogoStarPizza} />
      <p className="xl-font-size bold italic purple">
        Bienvenue chez Star Pizza
      </p>
      <HomepageButton
        bgColor="#875789"
        image={LogoEfficom}
        title="ÉTUDIANT EFFICOM"
        onClick={() => history.push("menu")}
      />
      <HomepageButton bgColor="#55945a" title="CLIENT START PIZZA" />
    </div>
  );
};
