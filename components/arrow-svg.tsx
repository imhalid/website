import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"
export default function ArrowSvg({ clicked }: { clicked: boolean }) {

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([["path", {
      d: clicked ?
        'M 1 2.5 L 3 2.5 C 4 2.5 4 2.5 5 2.5 L 7 2.5' : 'M1 1L3.19995 3.93333C3.59995 4.46666 4.39995 4.46667 4.79995 3.93334L7 1'
    }]])
  }, [clicked])
  return (
    <div ref={scope}>

      <motion.svg className="min-w-3 min-h-3 -rotate-90" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: clicked ? 0 : -90 }}
      >

        <motion.path
          d="M1 1L3.19995 3.93333C3.59995 4.46666 4.39995 4.46667 4.79995 3.93334L7 1"
          stroke="white"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>

  )
}

// 4.4667, 3.9333