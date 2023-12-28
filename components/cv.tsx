import Image from "next/image"
import cv from '@/public/cv.svg'

export default function CV() {

  return (
      <Image src={cv} alt="CV" className="w-[800px] h-auto shadow-2xl rounded-md" priority/>
  )
}