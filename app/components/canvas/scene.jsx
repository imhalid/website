import { Text, Grid } from "@react-three/drei"
import { useControls } from "leva"

export default function Scene() {

  const fontControls = useControls({
    fontSize: { value: 0.5, min: 0.1, max: 1, step: 0.1 },
    letterSpacing: { value: 0, min: 0, max: 1, step: 0.1 },
    lineHeight: { value: 1, min: 0, max: 2, step: 0.1 },
    color: { value: '#000000' },
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  })

  const { gridSize, ...gridConfig } = useControls({
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: '#6f6f6f',
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: '#9d4b4b',
    fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true
  })



  const fontProps = { font: '/PT-Serif.woff', fontSize: fontControls.fontSize, letterSpacing: fontControls.letterSpacing, lineHeight: fontControls.lineHeight, 'material-toneMapped': false }
  return (
    <>
      <group>
        <ambientLight intensity={1} />
        <Text {...fontProps} rotation={fontControls.rotation} color={fontControls.color} position={fontControls.position} anchorX="center" anchorY="middle">
          Whereas disregard
        </Text>
        <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />
      </group>
    </>
  )
}