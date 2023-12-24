import { Instances, Instance, shaderMaterial } from "@react-three/drei"
import { useFrame, extend } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react";
import * as THREE from "three";
import { Perf } from "r3f-perf";

export default function Scene() {
  const ref = useRef()
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.y = Math.PI * 2 * (time / 2 * 0.2) % (Math.PI * 2)
    ref.current.rotation.z = Math.PI * 2 * (time / 2 * 0.2) % (Math.PI * 2)
  })
  return (
    <group position={[5, 3, 0]} rotation={[0,0,0]}>
      {/* <Perf /> */}
      <Lights />
      <mesh rotation={[1, 1, 1]} ref={ref}>
        <boxGeometry args={[1, 1, 1]}  />
        <meshStandardMaterial color={0x80ffdb} />
      </mesh>
      {Array.from({ length: 10 }, (_, index) => (
        <Spheres count={50 * (index / 2)} radius={2 * index} speed={3 * index} key={index} index={index} />
      ))}
    </group>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
    </>
  );
}

function Spheres({ count = 50, radius = 4, centerX = 0, centerY = 0, centerZ = 0, color = new THREE.Color(), speed = 1, index, ...props }) {
  const ref = useRef()
  const shaderMaterial = useRef()
  // Daire merkezi
  // Her bir örneği oluştururken dairesel bir düzende bir pozisyon atayın
  const spheresValue = Array.from({ length: count }, (_, index) => {

    // Daire üzerindeki bir noktanın açısını hesaplayın
    const angle = (index / count) * 2 * Math.PI;

    // Noktanın x, y ve z koordinatlarını hesaplayın
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const z = 0; // Z koordinatını sabitleyin
    return {
      position: [x, y, z],
      // color: new THREE.Color(0x909090)
    };
  });
  
  const rainbowColors = [0x7400b8, 0x6930c3, 0x5e60ce, 0x5390d9, 0x4ea8de, 0x48bfe3, 0x56cfe1, 0x64dfdf, 0x72efdd, 0x80ffdb]

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
      <meshStandardMaterial color={rainbowColors[index % rainbowColors.length]} toneMapped={false}  wireframe/>
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

const SphereShaderMaterial = shaderMaterial({
  uTime: 1, uRotaion: 1.5, uFrequency:0.5, uAmplitude:0.5,
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
  `,
  `
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