'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from './scene';

export default function CanvasComponent() {
 return (
  <div className="w-full h-96">
  <Canvas>
   <OrbitControls />
  <color attach="background" args={["#fffaaa"]} />
   <Scene />
  </Canvas>
  </div>
 )
}