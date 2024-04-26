'use client'
import { motion, animate, motionValue, useAnimate } from "framer-motion"
import { useEffect } from "react"
export default function ArrowSvg({ clicked }: { clicked: boolean }) {

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([["path", {
      d: clicked ?
        'M1 1L3.19995 1C3.59995 1 4.39995 1 4.79995 1L7 1' : 'M1 1L3.19995 3.93333C3.59995 4.46666 4.39995 4.46667 4.79995 3.93334L7 1'
    }]])
  }, [clicked])
  return (
    <div ref={scope}>

      <svg className="min-w-3 min-h-3" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">

        <motion.path
          d="M1 1L3.19995 3.93333C3.59995 4.46666 4.39995 4.46667 4.79995 3.93334L7 1"
          variants={{
            open: { d: "M1 1L3.19995 3.93333C3.59995 4.46666 4.39995 4.46667 4.79995 3.93334L7 1" },
            closed: { d: "M1 1L3.19995 3.93333C3.59995 4.46666 4.39995 4.46667 4.79995 3.93334L7 1" }
          }}
          stroke="white"
          strokeLinecap="round"
          animate={{ rotate: clicked ? 0 : -90 }}
        />
      </svg>
    </div>

  )
}

// 4.4667, 3.9333