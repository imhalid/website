import { Text } from "@react-three/drei"
import { useControls } from "leva"
import { useRef } from "react";
export default function Scene() {
  const container = useRef()

  const fontControls = useControls({
    fontSize: { value: 3, min: 0.1, max: 5, step: 0.1 },
    letterSpacing: { value: 0, min: 0, max: 1, step: 0.1 },
    lineHeight: { value: 1, min: 0, max: 2, step: 0.1 },
    color: { value: '#000000' },
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  })

  const fontProps = { font: '/PT-Serif.woff', fontSize: fontControls.fontSize, letterSpacing: fontControls.letterSpacing, lineHeight: fontControls.lineHeight, 'material-toneMapped': false }
  return (
    <>
      <group ref={container}>
        <Text {...fontProps} rotation={fontControls.rotation} color={fontControls.color} position={fontControls.position} anchorX="center" anchorY="middle">
          Whereas disregard 
        </Text>
      </group>
    </>
  )
}