import React from "react";
import cl from "./ModalVideoPlayer.module.css";
const ModalVideoPlayer = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent}>{children}</div>
    </div>
  );
};

export default ModalVideoPlayer;
