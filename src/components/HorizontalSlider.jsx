import React, { useState } from "react";
import SliderPoint from "./HorizontalSlider/SliderPoint";
import cl from "./styles/HorizontalSlider.module.css";
import Unity from "./images/maintained/unity.svg";
import UnrealEngine from "./images/maintained/unreal_engine.svg";
import CryEngine from "./images/maintained/cryengine.svg";
import Decentraland from "./images/maintained/decentraland.svg";
import GameMaker from "./images/maintained/gamemaker.svg";
import GoDot from "./images/maintained/godot.svg";
import Robolox from "./images/maintained/roblox.svg";
import SandBox from "./images/maintained/sandbox.svg";

export const HorizontalSlider = () => {
  const [elements] = useState([
    {
      id: 1,
      logo: <img className={cl.maintane} src={Unity} alt="" />,
    },
    {
      id: 2,
      logo: <img className={cl.maintane} src={UnrealEngine} alt="" />,
    },
    {
      id: 3,
      logo: <img className={cl.maintane} src={CryEngine} alt="" />,
    },
    {
      id: 4,
      logo: <img className={cl.maintane} src={Decentraland} alt="" />,
    },
    {
      id: 5,
      logo: <img className={cl.maintane} src={GameMaker} alt="" />,
    },
    {
      id: 6,
      logo: <img className={cl.maintane} src={GoDot} alt="" />,
    },
    {
      id: 7,
      logo: <img className={cl.maintane} src={Robolox} alt="" />,
    },
    {
      id: 8,
      logo: <img className={cl.maintane} src={SandBox} alt="" />,
    },
  ]);
  return (
    <div className={cl.slider}>
      <div className={cl.sliderBody}>
        <div className={cl.sliderTrack}>
          {elements.map((element) => (
            <SliderPoint element={element} key={element.id} />
          ))}
        </div>
        <div className={cl.sliderTrack}>
          {elements.map((element) => (
            <SliderPoint element={element} key={element.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
