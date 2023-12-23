'use client';
import { Canvas, extend,  } from "@react-three/fiber";
import { OrbitControls, Effects } from "@react-three/drei";
import Scene from './scene';
import { Loader } from '@react-three/drei'
import { Bloom, EffectComposer, ChromaticAberration, TiltShift, FXAA, } from "@react-three/postprocessing";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js";
extend({AfterimagePass})
export default function CanvasComponent() {


  
 return (
  <>
   <Canvas camera={{ fov: 5, position: [0, 0, 120] }}>
    {/* <OrbitControls /> */}
    {/* <color attach="background" args={["black"]} /> */}
    {/* <EffectComposer>
      <FXAA />
     <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={100}  />
      <ChromaticAberration offset={[0.001, 0.001]} />
      <TiltShift blur={0.2} />
    </EffectComposer> */}

    {/* <Effects>
         <afterimagePass damp={0.1}  />
    </Effects> */}
    <Scene />
   </Canvas>
     <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
  </>
 )
} 