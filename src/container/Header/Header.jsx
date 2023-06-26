import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Cocktail</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Gotham is a rooftop bar in Sofia that offers a selection of inventive
        cocktails and a laid-back ambiance.
      </p>
    </div>
    <div className="app__header-img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
