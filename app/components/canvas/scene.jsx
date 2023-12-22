import { Instances, Instance } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react";
import * as THREE from "three";
import { Perf } from "r3f-perf";

// Her bir örneği oluştururken dairesel bir düzende bir pozisyon atayın
const spheresValue = Array.from({ length: 20 }, (_, index) => {
  // Daire merkezi
  const centerX = 0;
  const centerY = 0;
  const centerZ = 0;

  // Daire yarıçapı
  const radius = 3.5;

  // Daire üzerindeki bir noktanın açısını hesaplayın
  const angle = (index / 20) * 2 * Math.PI;

  // Noktanın x, y ve z koordinatlarını hesaplayın
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  const z = 0; // Z koordinatını sabitleyin

  return {
    position: [x, y, z],
    color: new THREE.Color("orange")
  };
});

export default function Scene() {
  return (
    <group>
      <Perf />
      <Spheres />
    </group>
  )
}

function Spheres({ count = 20 }) {
const ref = useRef()
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.set(
      time / 2,
      0,
      0
    )
  })
  return (
    <Instances limit={spheresValue.length} range={count} ref={ref}>
      <sphereGeometry args={[0.5, 12, 12]} />
      <meshNormalMaterial roughness={1} color="#f0f0f0" />
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
