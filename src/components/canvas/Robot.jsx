import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robots = ({ isMobile }) => {
  const robot = useGLTF("./robot_playground/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        postion={[-20, 50, 10]}
        angle={0.12}
        prenumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive
        object={robot.scene}
        scale={isMobile ? 0.7 : 1.9}
        position={isMobile ? [0, -3, -2.2] : [2, -2.3, 0.5]}
        rotation={[0, -4, 0.1]}
        //rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const RobtsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // above section add for the mobile user

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        {" "}
        {/* this is the key, do not load CanvasLoader for now* because 3D will not render*/}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robots isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RobtsCanvas;
