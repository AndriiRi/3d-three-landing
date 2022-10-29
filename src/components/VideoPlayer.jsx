import React from "react";
import cl from "./styles/VideoPlayer.module.css";
import YouTubeBaner from "./images/youtubeBaner.svg";
import VideoButton from "./buttons/VideoButton";
const VideoPlayer = ({ param }) => {
  return (
    <div className={cl.player}>
      <VideoButton className={cl.playButton} onClick={() => param(true)} />

      <img className={cl.imgn} src={YouTubeBaner} alt="videoBaner" />
    </div>
  );
};

export default VideoPlayer;
