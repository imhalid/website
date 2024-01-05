import { Instances, Instance, shaderMaterial } from "@react-three/drei"
import { useFrame, extend } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react";
import * as THREE from "three";
import { Perf } from "r3f-perf";
import { useThree } from "@react-three/fiber";

export default function Scene() {
  const ref = useRef();
  const { size } = useThree(); // Get the size of the canvas
  const isMobile = size.width < 700; // Check if the device is mobile

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.PI * 2 * (time / 5 * 0.2) % (Math.PI * 2);
    ref.current.rotation.z = Math.PI * 2 * (time / 5 * 0.2) % (Math.PI * 2);
  });

  return (
    <group position={isMobile ? [2, 3, 0] : [5, 3, 0]} rotation={[0, 0, 0]}>
      {/* <Perf /> */}
      <Lights />
      <mesh rotation={[1, 1, 1]} ref={ref}>
        <boxGeometry args={isMobile ? [0.5, 0.5, 0.5, 2, 2, 2] : [1, 1, 1, 20, 20, 20]} />
        <meshStandardMaterial color={0x00b4d8} />
        {/* <boxShaderMaterial wireframe /> */}
      </mesh>
      {Array.from({ length: isMobile ? 5 : 10 }, (_, index) => (
        <Spheres count={isMobile ? 25 * (index / 2) : 50 * (index / 2)} radius={isMobile ? index : 2 * index} speed={5 * index} key={index} index={index} />
      ))}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
    </>
  );
}

function Spheres({ count = 50, radius = 4, centerX = 0, centerY = 0, centerZ = 0, color = new THREE.Color(), speed = 1, index, ...props }) {
  const ref = useRef()
  const spheresValue = Array.from({ length: count }, (_, index) => {

    const angle = (index / count) * 2 * Math.PI;

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const z = 0; // Z koordinatını sabitleyin
    return {
      position: [x, y, z],
      // color: new THREE.Color(0x909090)
    };
  });
  // const rainbowColors = [0x143601, 0x1a4301, 0x245501, 0x538d22, 0x73a942, 0xaad576, 0xaad576, 0xaad576].toReversed()
  // const rainbowColors = [0x10002b, 0x240046, 0x3c096c, 0x5a189a, 0x7b2cbf, 0x9d4edd, 0xc77dff, 0xe0aaff].toReversed()
  // const rainbowColors = [0x03071e, 0x370617, 0x6a040f, 0x9d0208, 0xd00000, 0xdc2f02, 0xe85d04, 0xf48c06, 0xfaa307, 0xffba08].toReversed()
  const rainbowColors = [0x03045e, 0x023e8a, 0x0077b6, 0x0096c7, 0x00b4d8, 0x48cae4, 0x90e0ef, 0xade8f4].toReversed()
  // const rainbowColors = [0xd8f3dc, 0xb7e4c7, 0x95d5b2, 0x74c69d, 0x52b788, 0x40916c, 0x2d6a4f, 0x1b4332, 0x081c15]

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    // shaderMaterial.current.uTime = time
    ref.current.rotation.set(
      ref.current.rotation.y = index % 2 === 1 ? Math.PI * 2 * (time / speed * .2) : 0,
      ref.current.rotation.y = index % 2 === 0 ? Math.PI * 2 * (time / speed * .2) : 0,
      0,
    )
  })
  return (
    <Instances ref={ref} >
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color={rainbowColors[index % rainbowColors.length]} wireframe />
      {/* <sphereShaderMaterial ref={shaderMaterial} /> */}
      {spheresValue.map((props, index) => (
        <Sphere key={index} {...props} />
      ))}
    </Instances>
  )
}

function Sphere({ color = new THREE.Color(), position, ...props }) {
  const ref = useRef()
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    ref.current.position.set(
      position[0],
      position[1],
      position[2]
    )
    ref.current.rotation.set(
      0,
      Math.sin(2 * Math.PI * (time / 2 * 0.2)),
      // 0,
      0
    )

  })

  return (
    <Instance color={color} ref={ref} />
  )
}


const BoxShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0x909090),
    uWaveElevation: 0.5,
    uWaveFrequency: [0.5, 0.5],
    uWaveDirection: 1,

  },
  `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float time;
  uniform vec3 color;
  uniform float uWaveElevation;
  uniform vec2 uWaveFrequency;
  uniform float uWaveDirection;
  
  void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;

   vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float wave = sin(modelPosition.x * uWaveFrequency.x * uWaveDirection + uTime * 5.0) * uWaveElevation / 4.0;
    modelPosition.y += wave;


    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
  }
  `,`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float time;
  uniform vec3 color;
  void main() {
    gl_FragColor = vec4(color, 1.0);
  }
  `
)

extend({ BoxShaderMaterial })

const SphereShaderMaterial = shaderMaterial({
  uTime: 1, uRotaion: 1.5, uFrequency: 0.5, uAmplitude: 0.5,
},
  `
  varying vec3 vNormal;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uRotation;
  uniform float uFrequency;
  uniform float uAmplitude;
  attribute vec3 aPos;

  void main() {
    vec3 pos = position;
    vNormal = normal;
    vUv = uv;

    vec4 modelPosition = instanceMatrix * vec4(aPos, 1.0);

    
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.);
  }
  `,`
  varying vec3 vNormal;
  varying vec2 vUv;
  uniform float uTime;
  void main() {

    vec2 neWuv = -1.0 + 2.0 * vUv;
    gl_FragColor = vec4(0., -neWuv, 1.);
  }
  `
)

extend({ SphereShaderMaterial })