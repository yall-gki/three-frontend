"use client";

import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { Color } from "three";
const ThreeLoader = ({
  modelUrl,
  color,
}: {
  modelUrl: string;
  color: string;
}) => {
  const loader = useLoader(GLTFLoader, modelUrl);
  const meshRef = useRef();

  return (
    <Canvas className=" flex-grow max-h-screen rounded-[2.5rem] ">
      <color attach="background" args={[color]} />
      <OrbitControls />

      <ambientLight intensity={1} />
      <pointLight position={[15, 20, 20]} intensity={20} />
      <mesh ref={meshRef}>
        <primitive object={loader.scene} />
      </mesh>
    </Canvas>
  );
};

export default ThreeLoader;
