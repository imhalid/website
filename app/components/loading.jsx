// use gsap and useGsap for fake loading screen the percent 0 to 100
'use client'
import { useState, useRef } from 'react';
import { gsap  } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';

export default function Loading() {
  const countDown = useRef(null);
  const container = useRef(null);
  const progressBar = useRef(null);
  const [progress, setProgress] = useState(0);
  gsap.registerPlugin(CustomEase);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      onUpdate: () => {
        setProgress(Math.round(countDown.current.textContent));
      }
    });

    const random = (Math.random() * (1 - 1) + 1).toFixed(2);

    tl.add('start').to(countDown.current, {
      textContent: 100,
      duration: random,
      roundProps: "textContent",
      ease: "steps(12)",
    }, 'start')
      
      .to(progressBar.current, {
        width: "196px",
        duration: random,
      }, 'start')
     
      

    tl.add('end').to(countDown.current, {
      opacity: 0,
      duration: 0.5,
    }, 'end').to(progressBar.current, {
      opacity: 0,
      duration: 0.5,
      ease: "expoScale(0.5,7,none)",
    }, 'end').to(container.current, {
      opacity: "0",
      duration: 0.5,
      ease: "expoScale(0.5,7,none)",
    }, 'end')

  }, []);


  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-[#b3ff1a]" ref={container}>
    <div className='flex flex-col justify-center items-center w-60'>
      <div ref={countDown} className="text-[#191919] text-9xl text-center ">{progress}</div>
      <div ref={progressBar} className="bg-emerald-500 h-1"></div>
      </div>
    </div>
  );
}
