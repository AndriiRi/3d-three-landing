import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls, Stage } from "@react-three/drei";
const ModelViewer = () => {
  function Model(props) {
    const { scene } = useGLTF("./model/0001.glb");
    return <primitive object={scene} {...props} />;
  }
  return (
    <Canvas dpr={[1, 2]} style={{ position: "absolute" }}>
      <PresentationControls
        speed={10.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={null}>
          <Model skale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default ModelViewer;
