'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from './scene';
import { Loader } from '@react-three/drei'

export default function CanvasComponent() {
 return (
  <>
   <Canvas camera={{ fov: 5, position: [0, 0, 120] }}>
    {/* <OrbitControls /> */}
    
    <Scene />
   </Canvas>
     <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
  </>
 )
} 