'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from './scene';

export default function CanvasComponent() {
 return (
  <div className="w-full h-56 mt-10 rounded-xl border">
  <Canvas camera={{fov: 5, position: [0,0,65]}}>
   <OrbitControls />
  <color attach="background" args={["#fff"]} />
   <Scene />
  </Canvas>
  </div>
 )
}