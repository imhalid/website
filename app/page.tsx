
import Navbar from "@/app/components/navbar"
import CanvasComponent from "@/app/components/canvas/canvas"
import MessageComponent from "@/app/components/message"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center flex-col justify-between font-mono text-sm lg:flex">
        <Navbar />
        {/* <CanvasComponent /> */}
        {/* <div className="w-full h-full flex justify-center items-center">
        <MessageComponent />
        </div> */}
        <section className="grid-container">
          <div className="a">a</div>
          <div className="b">b</div>
          <div className="c">c</div>
          <div className="d">d</div>
          <div className="e">e</div>
          <div className="f">f</div>
          <div className="g">g</div>
        </section>
      </div>
    </main>
  )
}


