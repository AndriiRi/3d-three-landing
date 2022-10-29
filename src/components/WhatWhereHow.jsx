import React from "react";
import cl from "./styles/WhatWhereHow.module.css";
import Point from "./WhatWhereHomPoint/Point";
import { ReactComponent as Animated } from "./icons/smallIcons/Animated.svg";
import { ReactComponent as Support } from "./icons/smallIcons/support.svg";
import { ReactComponent as Unifed } from "./icons/smallIcons/unifed.svg";
import { ReactComponent as Unique } from "./icons/smallIcons/unique.svg";

import { useState } from "react";
const WhatWhereHow = () => {
  const [points] = useState([
    {
      id: 1,
      icon: <Animated />,
      title: "Animated",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, delectus.",
    },
    {
      id: 2,
      icon: <Support />,
      title: "Support",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, delectus.",
    },
    {
      id: 3,
      icon: <Unifed />,
      title: "Unifed",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, delectus.",
    },
    {
      id: 4,
      icon: <Unique />,
      title: "Unique",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, delectus.",
    },
  ]);
  return (
    <div>
      <p className={cl.title}>What? Where? How?</p>
      <div className={cl.content}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centurie.
        </p>
        <div className={cl.points}>
          {points.map((point) => (
            <Point point={point} key={point.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWhereHow;
