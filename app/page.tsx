
import Navbar from "@/components/navbar"
import VintageGradient from "@/utils/vintage-gradient"
import Link from "next/link"
import SocialLinks from "@/components/social-links"
export default function Home() {
  return (
    <>
      <main className="w-full h-screen py-14 px-0 relative">
        <div className="max-w-xl sm:px-14 px-5">
          <Navbar />
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mt-16">Hello!!</h1>
          <p className="text-base mt-5">I have a strong background in the technology sector, where I have worked for seven years, focusing on frontend development for the last two.</p>
          <p className="text-base mt-5">I am now looking for a new challenge in the field of creative development, where I can apply my skills and passion for WebGL.</p>
          
          <Link href='mailto:imhalid@icloud.com' id="accept-job" className="relative border border-neutral-800 w-fit h-full flex items-center gap-3 mt-[46px] px-3.5 py-2.5 rounded-full">
            <div className="signal" />
            <p className="text-base">Contact</p>
          </Link>
          
          <VintageGradient />
        </div>
        <div className="absolute bottom-10 sm:left-14 left-5">
        <SocialLinks />
        </div>
      </main>
      {/* <div className="absolute w-full h-full top-0 left-0 pointer-events-none -z-[5]">
        <Scene />
      </div> */}
    </>
  )
}

