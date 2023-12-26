
import Navbar from "@/app/components/navbar"
import Dimension from "@/app/components/dimension"
import VintageGradient from "@/app/components/vintage-gradient"
// import GlowButton from "@/app/components/glow-button"
import Clock from "@/app/components/clock"
import Scene from "@/app/components/canvas/canvas"
import Projects from "@/app/components/projects"
export default function Home() {
  return (
    <>
      <main className="w-full h-screen p-14 relative">
        <div className="max-w-xl">
          <Navbar />
          <h1 className="text-8xl font-bold mt-16">Under Development</h1>
          <p className="text-base mt-5">Developer and designer making products that feel 'right' and faster. Focused on creating fluid and accessible interfaces. Interested in 3D modeling.</p>
          <p className="text-base mt-5">I'm focused on Next.js right now. I love writing code, dealing with designs. Looking for a job where I can improve myself.</p>
          <button id="accept-job" className="relative border border-neutral-800 w-fit h-full flex items-center gap-3 mt-[46px] px-3.5 py-2.5 rounded-full">
            <div className="signal"></div>
            <p className="text-base">Accepting job offers</p>
          </button>
          <div className="jumbo absolute inset-0 opacity-50"></div>
          {/* <Dimension /> */}
          <VintageGradient />
          {/* <GlowButton /> */}
          <Clock />
        </div>
        <Projects />
      </main>
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none -z-[5]">
        <Scene />
      </div>
    </>
  )
}

