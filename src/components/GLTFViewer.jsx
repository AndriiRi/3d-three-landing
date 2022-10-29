import React, {Suspense, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useAnimations, useGLTF} from '@react-three/drei';


const Model = ({onActionsLoad, path, ...props}) => {
  const group = useRef()
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    onActionsLoad && onActionsLoad(actions);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <primitive ref={group} object={scene} dispose={null} {...props} />;
}

const GLTFViewer = ({
  onActionsLoad,
  path,
  ...rest
}) => {

  return (
    <Canvas {...rest}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model
          onActionsLoad={onActionsLoad}
          position={[0, -1.5, 0]}
          path={path}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

GLTFViewer.propTypes = {
  onActionsLoad: PropTypes.func,
  path: PropTypes.string.isRequired
}

export default GLTFViewer;
