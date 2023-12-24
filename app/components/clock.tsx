'use client'
import { useEffect,useState } from "react"

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <p className="text-sm absolute top-11 right-12 text-neutral-300" suppressHydrationWarning>{time}</p>
  )
}