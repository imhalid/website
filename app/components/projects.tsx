import Image from "next/image"
import { Parisienne } from "next/font/google"
import Link from "next/link"
import hik from "../../public/images/hik.webp"
import cv from "../../public/images/cv.webp"

const parisienne = Parisienne({ subsets: ["latin"], weight: ["400"] })


export default function Projects() {
console.log(parisienne)
  return (
    <div className="mt-52 flex flex-wrap gap-3 w-full justify-center">
      {/* HKARIX */}
      <Link href="https://hikarix.vercel.app" className="group">
        <div className="w-[400px] h-[300px] backdrop-blur-sm bg-neutral-800/40 p-1 rounded-md flex flex-col gap-1 ">
          <div className="relative bg-neutral-900 w-full flex justify-center items-center h-[90%] rounded-sm overflow-hidden ">
            <p className={`z-10 text-8xl drop-shadow-md ${parisienne.className}`}>Hikarix</p>
            <div
              className="w-full h-full absolute top-0 left-0"
              style={{
                background: 'radial-gradient(circle, rgba(0,10,0,1) 0%, rgba(252,70,107,0) 100%)',
              }}
            ></div>
            <Image src={hik} fill className="w-full h-full pointer-events-none object-cover object-right opacity-20 grayscale-[1] group-hover:grayscale-0 transition-all" alt="hikarix" />
          </div>
          <div className="h-[10%] w-full bg-neutral-900/90 rounded-sm flex justify-between items-center px-5">
            <p>See live</p>
            <div className="flex gap-2">
              <span>
                <p>3.js</p>
              </span>
              <span>
                <p>API</p>
              </span>
              <span>
                <p>Next.js</p>
              </span>
            </div>
          </div>
        </div>
      </Link>
      {/* HKARIX */}
      {/* CV-BUILDER */}
      <Link href="https://cv-builder.halid.dev" className="group">
        <div className="w-[400px] h-[300px] backdrop-blur-sm bg-neutral-800/40 p-1 rounded-md flex flex-col gap-1 ">
          <div className="relative bg-neutral-900 w-full flex justify-center items-center h-[90%] rounded-sm overflow-hidden ">
            <p className={`z-10 text-8xl drop-shadow-md ${parisienne.className}`}>Cv B.</p>
            <div
              className="w-full h-full absolute top-0 left-0"
              style={{
                background: 'radial-gradient(circle, rgba(0,10,0,1) 0%, rgba(255,255,255,0) 100%)',
              }}
            ></div>
            <Image src={cv} fill className="w-full h-full pointer-events-none object-cover object-right opacity-20 grayscale-[1] group-hover:grayscale-0 transition-all" alt="hikarix" />
          </div>
          <div className="h-[10%] w-full bg-neutral-900/90 rounded-sm flex justify-between items-center px-5">
            <p>See live</p>
            <div className="flex gap-2">
              <span>
                <p>FM</p>
              </span>
              <span>
                <p>Cntxt</p>
              </span>
              <span>
                <p>Next.js</p>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}