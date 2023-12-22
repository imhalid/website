'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from './scene';

export default function CanvasComponent() {
 return (
   <Canvas camera={{ fov: 5, position: [0, 0, 120] }}>
    <OrbitControls />
    <color attach="background" args={["#262626"]} />
    <Scene />
   </Canvas>
 )
} 