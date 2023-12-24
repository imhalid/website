'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from './scene';
import { Loader } from '@react-three/drei'
import { EffectComposer, ChromaticAberration, TiltShift } from "@react-three/postprocessing";
export default function CanvasComponent() {

  return (
    <>
      <Canvas camera={{ fov: 5, position: [0, 0, 120] }}>
        {/* <OrbitControls /> */}
        {/* <color attach="background" args={["black"]} /> */}
        <EffectComposer>
          <ChromaticAberration offset={[0.001, 0.001]} />
          {/* <TiltShift blur={0.1} /> */}
        </EffectComposer>

        <Scene />
      </Canvas>
      <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
    </>
  )
} 