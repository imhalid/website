'use client'
import { useEffect, useState } from "react"

export default function GlowButton() {
 useEffect(() => {
  const syncPointer = ({ clientX: x, clientY: y }: {clientX: number, clientY: number}) => {
   document.documentElement.style.setProperty('--x', x.toFixed(2));
   document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
   document.documentElement.style.setProperty('--y', y.toFixed(2));
   document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
  };

  document.body.addEventListener('pointermove', syncPointer);

  return () => {
   document.body.removeEventListener('pointermove', syncPointer);
  };
 }, []);
 return (
  <>
  <article data-glow>
    <div data-glow></div>
  </article>
  test
  </>
 )
}