import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} className="app__chef-img" alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            The problem with the world is that everyone is a few drinks behind.
          </p>
        </div>
        <p className="p__opensans">
          An efficient bartenders first aim should be to please his customers,
          paying particular attention to meet the individual wishes of those
          whose tastes and desires he has already watched and ascertained; and,
          with those whose peculiarities he has had no opportunity of learning,
          he should politely inquire how they wish their beverages served, and
          use his best judgment in endeavoring to fulfill their desires to their
          entire satisfaction. In this way he will not fail to acquire
          popularity and success.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
