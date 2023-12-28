'use client'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
export default function ObjectComponent() {
  return (
   <>
    <Canvas camera={
     { fov: 5, near: 0.1, far: 1000, position: [20, 20, 20] }
    }
    className="w-96"
    >
    <color attach="background" args={['#000']} />
      <OrbitControls />
        <pointLight position={[1, 1, 1]} color='#fedaae' decay={0.1} />
        <spotLight position={[.5, 2, .5]} penumbra={1} intensity={1} angle={1} color='#ffff' />
      <mesh>
        <boxGeometry />
          <meshStandardMaterial color="#fedaae" wireframe />
      </mesh>
    </Canvas>
   </>
  );
}