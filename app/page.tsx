
import Navbar from "@/app/components/navbar"
import CV from "@/app/components/cv"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center flex-col justify-between font-mono text-sm lg:flex">
        <Navbar />
        <CV />
      </div>
    </main>
  )
}
