import { Text } from "@react-three/drei"
import ptserif from './pt_serif.woff'

export default function Scene() {
 console.log(ptserif)
 return (
  <>
  <ambientLight intensity={1} />
  <mesh>
   <boxGeometry args={[1, 1, 1]} />
   <meshStandardMaterial color="hotpink" />
    <Text fontSize={0.5} color="black" position={[0, 0, 0]} anchorX="center" anchorY="middle">
     Whereas disregard
   </Text>
  </mesh>
  </>
 )
}