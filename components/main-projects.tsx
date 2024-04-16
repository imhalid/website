'use client'
import ProjectsData from "@/components/data/projects"
import { Project as Data } from "@/app/projects/page"
import Image from "next/image"
import gsap from "gsap"
import { useEffect, useState } from "react"
import { useMouse } from "@uidotdev/usehooks";
export default function MainProjects() {
  const [mouse, ref] = useMouse();
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const projectImages = document.querySelectorAll(".projectImage")
    projectImages.forEach((projectImage) => {
      const id = projectImage.getAttribute("id") as string;
      const image = document.getElementById(id);
      // const isHovered = projectImage.getAttribute("data-side") === "left" ? lastMousePosition.x < window.innerWidth / 2 : lastMousePosition.x > window.innerWidth / 2;
      if (image) {
        gsap.to(image, { 
          autoAlpha: 1,
          left: isHovered ? mouse.x - image.clientWidth / 2 : 200,
          top: isHovered ? mouse.y - image.clientHeight / 2 : 670
        });
      }

    })
  }, [mouse])

  return (
    <div className="mt-10 projectsSection divide-y border-b border-neutral-700"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-xl font-medium mb-5">Projects</p>
      {
        ProjectsData.map((project: Data, index) => {
          return (
            <div key={index} className="flex projectName justify-between items-center hover:bg-white hover:text-black z-50 border-neutral-700">
              <p className="py-2 text-xs">{project.name}</p>
              <div className="flex">
                {project.tags.map((tag, index) => {
                  return (
                    <p className="my-1 px-1 py-0.5 font-medium rounded text-xs  text-blue-500" key={index}>
                      {tag}
                    </p>
                  )
                })}
              </div>
              <Image id={project.name} className="projectImage pointer-events-none z-10 absolute" data-side={project.side} src={project.image} width={300} height={300} alt={project.name} />
            </div>
          )
        })
      }
    </div>
  )
}