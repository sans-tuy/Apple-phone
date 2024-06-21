import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

// load model using loader gltf
const Model = () => {
  const gltf = useLoader(GLTFLoader, "/iphone_15_pro_max.glb");
  const { animations } = gltf;
  const { actions } = useAnimations(animations, gltf.scene);
  const modelRef = useRef();

  // // to handle animation play
  //   useEffect(() => {
  //     if (actions && actions[Object.keys(actions)[0]]) {
  //       actions[Object.keys(actions)[0]].play();
  //     }
  //   }, [actions]);

  const handleClick = () => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]]; // Select the first animation
      if (action) {
        action.reset().fadeIn(0.5).play();
      }
    }
  };

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = 55;
      modelRef.current.position.y = -3.5;
      modelRef.current.position.x = -1.5;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      rotate={90}
      scale={2}
      onClick={handleClick}
    />
  );
};

const GLTFModel = () => (
  <Canvas style={{ height: "500px" }}>
    {/* give a light to all scene of model */}
    <ambientLight />
    <pointLight position={[10, 10, 10]} intensity={1} />
    <Suspense fallback={null}>
      <Model />
    </Suspense>
    {/* used to rotate model to see at all point ov view */}
    <OrbitControls />
  </Canvas>
);

export default GLTFModel;
