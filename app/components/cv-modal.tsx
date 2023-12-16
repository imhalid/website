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
  transform: 'translateY(-100%)',
  top: '0',
 },
 enter: {
  opacity: 1,
  transform: 'translateY(0%)',
  top: '50%',
 },
 leave: {
  opacity: 0,
  transform: 'translateY(-100%)',
  top: '0',
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
   {transitionCV((style, item) =>
    item ?
     <>
      <animated.div
       className='z-20 cv-container relative shadow-2xl rounded-md'
       ref={modalRef}
       style={{
        ...style,
        position: 'absolute', 
        top: '120px', 
        left: '50%', 
        transform: 'translate(-50%, 0)', // ele
        width: '100%',
        height: '100%',
        overflow: 'auto', 
       }}
      >
       <CV />
      </animated.div>
     </>
     : null
   )}

   {
    transitionBackdrop((style, item) =>
     item ?
      <animated.div ref={backdropRef} style={{
       ...style,
      }} className="fixed z-10 inset-0 bg-neutral-300/50 backdrop-blur-sm opacity-50"></animated.div>
      : null
    )
   }
  </div>
 )
}