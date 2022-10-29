import React from "react";
import playTriangle from "./playTriangle.svg";
import cl from "./VideoButton.module.css";
const VideoButton = () => {
  return (
    <button className={cl.play}>
      <img src={playTriangle} alt="" />
    </button>
  );
};

export default VideoButton;
