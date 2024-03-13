import Navbar from "@/components/navbar"
import ProjectsData from "@/components/data/projects"
import Link from "next/link"
import Image from "next/image"

type Project = {
  id: number
  name: string
  description: string
  image: string
  link: string
  live: string
  tags: string[]
}

export default function Home() {
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <div className="max-w-2xl  p-14">
        <Navbar />
        <div className="grid center grid-cols-1  mt-20 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10">
          {ProjectsData.map((project: Project, index: number) => {
            return (
              <div key={index}>
                <div className="">
                  <div className="relative saturate-50 hover:drop-shadow  transition-all hover:saturate-100  group ">
                    <Image
                      src={project.image}
                      width={500}
                      height={300}
                      className="rounded-xl transition-all  border"
                      style={{ border: '1px solid #3b3b3b' }}
                      alt={project.name}
                      priority
                    />
                    <div className="absolute flex space-x-3 opacity-0  transition-opacity group-hover:opacity-100 bottom-4 left-2">
                      <Link className="inline shadow bg-black/50 rounded-md overflow-hidden px-2 py-1" href={project.link}>
                        Link
                      </Link>
                      <Link className="inline shadow bg-black/50 rounded-md overflow-hidden px-2 py-1" href={project.live}>
                        Live
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link href={project.live}>
                      <p className="text-lg hover:ml-1  transition-all font-bold mb-2">{project.name}</p>
                    </Link>

                    <p className="text-white/80">{project.description}</p>
                    <div className="flex flex-wrap">
                      {project.tags.map((tag, index) => {
                        return (
                          <p className="mr-1 my-1 px-2 py-0.5 rounded text-xs font-bold bg-blue-800/20 text-blue-500" key={index}>
                            {tag}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}