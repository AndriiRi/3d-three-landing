import React from "react";
import cl from "./Point.module.css";
const Point = (props) => {
  return (
    <div className={cl.point}>
      <div className={cl.titleLine}>
        <span>{props.point.icon}</span>
        <span className={cl.title}>{props.point.title}</span>
      </div>
      <p className={cl.description}>{props.point.description}</p>
    </div>
  );
};

export default Point;
