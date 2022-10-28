import React from "react";
import cl from "./styles/VideoPlayer.module.css";
import YouTubeBaner from "./images/youtubeBaner.svg";
const VideoPlayer = () => {
  return (
    <div className={cl.player}>
      <button className={cl.playButton}>Play</button>
      <img className={cl.imgn} src={YouTubeBaner} alt="videoBaner" />
    </div>
  );
};

export default VideoPlayer;
