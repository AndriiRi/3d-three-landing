import React, { useState } from "react";
import GLTFViewer from "./GLTFViewer";
import cl from "./styles/ModelViewer.module.css";
import { ReactComponent as MiniMan } from "./images/characters/miniMan.svg";
const ModelViewer = () => {
  const [activeModel] = useState(`${process.env.PUBLIC_URL}/model/0001.glb`);

  const [actions, setActions] = useState(null);
  const [animation, setAnimation] = useState("pose_stand");
  const onActionsLoad = (actions) => setActions(actions);

  const runAction = (name) => {
    if (animation) actions[animation].stop();
    actions[name].play();
    setAnimation(name);
  };

  return (
    <div className={cl.modelViever}>
      <div className={cl.objectWindow}>
        <GLTFViewer
          camera={{ position: [-10, 0, 30], fov: 8 }}
          onActionsLoad={onActionsLoad}
          path={activeModel}
        />
      </div>

      <div className={cl.infoAndOptions}>
        <p className={cl.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen.
        </p>
        <div>
          <p className={cl.title}>Character</p>
          <div className={cl.characters}>
            <div className={cl.character}>
              <MiniMan />
            </div>
            <div className={cl.character}></div>
            <div className={cl.character}></div>
            <div className={cl.character}></div>
            <div className={cl.character}></div>
          </div>
        </div>
        <div className={cl.animationButtons}>
          <p className={cl.title}>Animation & poses</p>
          {actions &&
            Object.keys(actions).map((i) => {
              return (
                <button
                  className={cl.animationButton}
                  key={`action-${i}`}
                  onClick={() => runAction(i)}
                >
                  {i}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
