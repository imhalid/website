'use client'
import { useState, useEffect, useRef } from "react"
import { useTransition, animated } from '@react-spring/web'
import CV from "./cv"

export default function CvModal(): JSX.Element {
 const [isOpen, setIsOpen] = useState(false)
 const modalRef = useRef(null)
 const backdropRef = useRef(null)

 const handleDialogChange = () => setIsOpen(true)

 const transitionCV = useTransition(isOpen, {
 from: {
  opacity: 0,
  transform: 'translate3d(0, 40px, 0)',
 },
 enter: {
  opacity: 1,
  transform: 'translate3d(0, 0, 0)',
 },
 leave: {
  opacity: 0,
  transform: 'translate3d(0, 40px, 0)',
 },
 })

 const transitionBackdrop = useTransition(isOpen, {
 from: {
  opacity: 0,
 },
 enter: {
  opacity: 1,
 },
 leave: {
  opacity: 0,
 },
 })


 const handleClickOutside = (event: Event) => {
  if (backdropRef.current && backdropRef.current === event.target) {
   setIsOpen(false);
  }
 }

 useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  }
 }, [backdropRef, setIsOpen]);

 return (
  <div className="test">
   <button onClick={handleDialogChange}>
    CV
   </button>
   <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 w-full h-full pointer-events-none">
   {transitionCV((style, item) =>
    item ?
     <>
      <animated.div
       className='z-10 relative shadow-2xl rounded-md'
       ref={modalRef}
       style={{
        ...style,
       }}
      >
       <CV />
      </animated.div>
      
     </>
     : null
   )}
   </div>

   {
    transitionBackdrop((style, item) =>
     item ?
      <animated.div ref={backdropRef} style={{
       ...style,
      }} className="fixed -z-10 inset-0 bg-neutral-300/50 backdrop-blur-sm opacity-50"></animated.div>
      : null
    )
   }
  </div>
 )
}