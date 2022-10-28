import React from "react";
import cl from "./styles/MainBanner.module.css";
const MainBanner = () => {
  return (
    <div className={cl.mainBanner}>
      <div className={cl.title}>
        <h1>PROJECT</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
    </div>
  );
};

export default MainBanner;
