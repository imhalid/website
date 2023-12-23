'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const MainTitle = ({ title }: {title:string}) => {
   const titleRef = useRef<HTMLHeadingElement>(null)

   useEffect(() => {
     if (titleRef.current) {
       const letters = titleRef.current.querySelectorAll('.letter')
       const mouseEnterHandler = () => {
         letters.forEach((letter: Element, index: number) => {
           gsap.fromTo(
             letter,
             {
               color: '#000',
               'text-shadow': '#b3ff1a 0px 0px 1px',
               'font-size': '96px',
               filter: 'blur(0px)',
               transform: 'translateY(0px)',
               backgroundColor: '#b3ff1a',
             },
             {
               'text-shadow': '#fff 0px 0px 25px',
               'font-size': '96px',
               color: '#fff',
               //  filter: 'blur(1px)',
               transform: 'translateY(-10px)',
               backgroundColor: '#b3ff1a',
               duration: 0.2,
               repeat: 1,
               delay: index * 0.08, // Add delay based on index
               yoyo: true,
             }
           )
         })
       }

       titleRef.current.addEventListener('mouseenter', mouseEnterHandler)

       return () => {
         if (titleRef.current) {
           titleRef.current.removeEventListener('mouseenter', mouseEnterHandler)
         }
       }
     }
   }, [])

  return (
    <h1 ref={titleRef} className=" mt-16 text-6xl sm:text-8xl font-bold text-[#000]">
      {title.split('').map((char, index) => (
        <span key={index} className="letter inline-block bg-[#b3ff1a]">
          {char}
        </span>
      ))}
    </h1>
  )
}

export default MainTitle
