import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          <FaMapMarkerAlt style={{ marginRight: "5px" }} />
          1407 Sofia, 100 James Bourchier Boulevard
        </p>
        <p className="p__opensans">
          <GiSmartphone style={{ marginRight: "5px" }} />
          +359 878 555 555
        </p>
        <p className="p__opensans">
          <GiSmartphone style={{ marginRight: "5px" }} />
          +359 878 777 777
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 08:00 am - 22:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 23:00 pm</p>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
