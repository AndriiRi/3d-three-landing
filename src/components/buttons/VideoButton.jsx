import React from "react";
import playTriangle from "./playTriangle.svg";
import cl from "./VideoButton.module.css";
const VideoButton = ({ param }) => {
  return (
    <button className={cl.play} onClick={() => param(true)}>
      <img src={playTriangle} alt="" />
    </button>
  );
};

export default VideoButton;
