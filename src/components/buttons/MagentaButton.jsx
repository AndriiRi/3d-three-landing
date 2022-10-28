import React from "react";
import cl from "./MagentaButton.module.css";

const MagentaButton = (props) => {
  return <button className={cl.magentaButton}>{props.children}</button>;
};

export default MagentaButton;
