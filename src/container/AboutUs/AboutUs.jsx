import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Gotham is a luxurious bar, that boasts an extensive gin collection and
          vintage, Art Deco-inspired decor. We stand out with our creative
          cocktail menu, innovative and theatrical cocktail experience and
          offers a classic drinks in a vintage setting. We also pride ourselves
          on using local ingredients to create ours cocktails.
        </p>
      </div>
      <div className="app__aboutus-content_spoon flex__center">
        <img src={images.largeSpoon} alt="content_spoon" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Opened on New Year’s Eve 2020/21 in Sofia, Bulgaria, Gotham quickly
          became a cocktail institution, owed greatly to its staff of incredible
          bartenders. In 2022, Gotham won Best International Cocktail Bar and
          World’s Best Cocktail Menu at Tales of the Cocktail Spirited awards.
          Gotham continues to receive worldwide recognition as a cocktail
          industry leader.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
