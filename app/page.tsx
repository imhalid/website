
import Navbar from "@/app/components/navbar"
import CanvasComponent from "@/app/components/canvas/canvas"
import MessageComponent from "@/app/components/message"
import ObjectComponent from "@/app/components/object"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="relative z-10 max-w-5xl w-full items-center flex-col justify-between font-mono text-sm lg:flex">
        <Navbar />
        <CanvasComponent />
        {/* <div className="w-full h-full flex justify-center items-center">
        <MessageComponent />
        </div> */}
        <section className="my-5 space-y-3">
          <p>Developer and designer making products that feel 'right' and faster. Focused on creating fluid and accessible interfaces. Interested in 3D modeling.</p>
          <p>I'm focused on Next.js right now. I love writing code, dealing with designs. Looking for a job where I can improve myself.</p>
        </section>
        <section className="grid-container w-full h-96">
          <div className="a">
            <div className="w-full h-full bg-blue-200"></div>
          </div>
          <div className="b">
            <div className="w-full h-full bg-cyan-200"></div>
          </div>
          <div className="c">
            <div className="w-full h-full bg-cyan-200"></div>
          </div>
          <div className="d">
            <div className="w-full h-full bg-red-200"></div>
          </div>
          <div className="e">
            <div className="w-full h-full bg-emerald-200"></div>
          </div>
          <div className="f">
            <div className="w-full h-full bg-amber-200"></div>
          </div>
          <div className="g">
            <div className="w-full h-full bg-violet-200"></div>
          </div>
        </section>
      </div>
    </main>
  )
}


