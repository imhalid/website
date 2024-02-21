'use client'
import { useEffect, useState } from "react"

export default function Dimension() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    
    setDimension({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight })
    window.addEventListener('resize', () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    })
  }, [])
  return (
    <p className="absolute bottom-11 left-14 text-sm text-neutral-300">
    {dimension.width} x {dimension.height}
    </p>
  )
}