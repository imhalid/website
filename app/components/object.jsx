'use client'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
export default function ObjectComponent() {
  return (
   <div>
    <Canvas camera={
     { fov: 75, near: 0.1, far: 1000, position: [0, 0, 2] }
    }>
      <OrbitControls />
      <ambientLight intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial color="white" />
      </mesh>
    </Canvas>
   </div>
  );
}