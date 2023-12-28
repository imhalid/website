'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function Message() {
  const container = useRef()
  const gradient = useRef()
  const tl = gsap.timeline()

  useGSAP(() => {
    gsap.set(gradient.current, { opacity: 0, translateY: -100, background: 'linear-gradient(oklab(1, -0.15, 0.2), oklab(0.7, 0.1, 0.1))', })
    gsap.set(container.current, { opacity: 0 })
    gsap.to(gradient.current, { opacity: 1, translateY: 50, duration: 1, delay: 0.5 })
    tl.to(container.current, { opacity: 1, duration: 1, delay: 1 })
      .to(gradient.current, { opacity: 0, translateY: 100, duration: 1, delay: 1 })
      .to(container.current, { opacity: 1, rotateX:-45, duration: 1, delay: 1 })

  })

  return (
    <div className="relative ">
      <div ref={container} className="opacity-0 mt-20">
        <div ref={gradient} className="gradient absolute top-0 left-5 w-20 h-14 opacity-0"></div>
        <p className="text-6xl area font-bold relative z-10">Hello World!@!</p>
      </div>
    </div>
  )
}