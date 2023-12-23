import { Instances, Instance, shaderMaterial } from "@react-three/drei"
import { useFrame, extend } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react";
import * as THREE from "three";
import { Perf } from "r3f-perf";

export default function Scene() {
  return (
    <group position={[0, 0, 0]}>
      <Perf />
      {/* <Lights /> */}
      <Spheres count={45} radius={3.5} speed={2} />
      <Spheres count={40} radius={3} speed={2.1} />
      <Spheres count={35} radius={2.5} speed={2.2} />
      <Spheres count={30} radius={2} speed={2.3} />
      <Spheres count={25} radius={1.5} speed={2.4} />
      <Spheres count={20} radius={1} speed={2.5} />
      <Spheres count={15} radius={0.5} speed={2.6} />
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

function Spheres({ count = 50, radius = 4, centerX = 0, centerY = 0, centerZ = 0, color = new THREE.Color(), speed = 1, ...props }) {
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
      color: new THREE.Color("orange")
    };
  });

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    shaderMaterial.current.uTime = time
    ref.current.rotation.set(
      0,
      // 2 * Math.PI * (time / speed * 0.05),
      0,
      0

    )
  })

  const material = <sphereShaderMaterial ref={shaderMaterial} />
  const geometry = <sphereGeometry args={[0.05, 20, 20]} />
  return (
    <Instances ref={ref}>
      <sphereGeometry args={[0.05, 20, 20]} />
      {/* <meshStandardMaterial roughness={1} /> */}
      <sphereShaderMaterial ref={shaderMaterial} />
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

  })

  return (
    <Instance color={color} ref={ref} />
  )
}

const SphereShaderMaterial = shaderMaterial({
  uTime: 0,
},
  `
  varying vec3 vNormal;
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vec3 pos = position;
    vNormal = normal;
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
  }
  `,
  `
  varying vec3 vNormal;
  varying vec2 vUv;
  uniform float uTime;
  void main() {
    vec3 color = vec3(1.0, 0.0, 0.0);
    float light = dot(normalize(vNormal), normalize(vec3(0.0, 0.0, 1.0)));
    gl_FragColor = vec4(vUv , 0.0, 1.0);
  }
  `

)

extend({ SphereShaderMaterial })