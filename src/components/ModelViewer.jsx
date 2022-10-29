import React, { useState } from "react";
import PropTypes from "prop-types";
import GLTFViewer from "./GLTFViewer";
import cl from "./styles/ModelViewer.module.css";

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
    <div className={cl.objectWindow}>
      <GLTFViewer
        camera={{ position: [-10, 0, 30], fov: 8 }}
        onActionsLoad={onActionsLoad}
        path={activeModel}
      />
      <div>
        {actions &&
          Object.keys(actions).map((i) => {
            return (
              <button
                key={`action-${i}`}
                onClick={() => runAction(i)}
                className={`${i === animation ? "active" : ""}`}
              >
                {i}
              </button>
            );
          })}
      </div>
    </div>
  );
};

ModelViewer.propTypes = {
  className: PropTypes.string,
};

export default ModelViewer;
