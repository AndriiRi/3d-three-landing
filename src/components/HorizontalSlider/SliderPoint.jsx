import React from "react";
import cl from "./SliderPoint.module.css";
const SliderPoint = (props) => {
  return <div className={cl.sliderEllement}>{props.element.logo}</div>;
};

export default SliderPoint;
