'use client'
import { useState, useEffect, useRef } from "react"
import { useTransition, animated } from '@react-spring/web'

export default function CvModal(): JSX.Element {
 const [isOpen, setIsOpen] = useState(false)
 const modalRef = useRef(null)

 const handleDialogChange = () => setIsOpen(!isOpen)

 const transition = useTransition(isOpen, {
 from: {
  opacity: 0,
  transform: 'translate3d(0, -40px, 0)',
 },
 enter: {
  opacity: 1,
  transform: 'translate3d(0, 0px, 0)',
 },
 leave: {
  opacity: 0,
  transform: 'translate3d(0, -40px, 0)',
 },
 })

 useEffect(() => {
  const handleClickOutside = (event: Event) => {
   if (modalRef.current && (modalRef.current as HTMLElement).contains(event.target as Node)) {
    setIsOpen(false);
   }
  }


 document.addEventListener("mousedown", handleClickOutside)
 return () => {
  document.removeEventListener("mousedown", handleClickOutside)
 }
 }, [modalRef, setIsOpen])

 return (
 <>
  <button onClick={handleDialogChange}>
  CV
  </button>

  {transition((style, item) =>
  item ?
   <animated.div
   ref={modalRef}
   style={{
    ...style,
   }}
   >
   <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
   <div className="absolute w-96 h-96 top-10 left-10 bg-slate-200 rounded-md"></div>
   </animated.div>
   : null
  )}
 </>
 )
}