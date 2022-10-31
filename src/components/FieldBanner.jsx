import React from "react";
import cl from "./styles/FieldBanner.module.css";
import FieldImage from "./images/SoccerFieldBanner.svg";
import MagentaButton from "./buttons/MagentaButton";
const FieldBanner = () => {
  return (
    <div className={cl.fieldBanner}>
      <div className={cl.description}>
        <p className={cl.title}>
          Only 576 items are available to find your hero
        </p>
        <MagentaButton>Go To OpenSea</MagentaButton>
      </div>
      <img className={cl.imgn} src={FieldImage} alt="videoBaner" />
    </div>
  );
};

export default FieldBanner;
