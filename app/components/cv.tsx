import Link from "next/link"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ['latin'] })

export default function CV() {

  return (
    <main className={`${openSans.className} bg-slate-100 w-full h-full p-8 rounded-sm`}>
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <section>
              <h1 className="font-bold text-3xl">Halit İslam İçli</h1>
              <h2>Frontend Developer</h2>
            </section>
            <section className="flex items-center">
              <h3 className="mr-8">Ankara, Turkey</h3>
              <MailSVG className="w-4 h-4 mr-1" />
              <Link href="mailto:imhali@icloud.com">imhali@icloud.com</Link>
            </section>
          </div>
          <div>
            <section className="flex flex-col">
              <span className="inline-flex items-center">
                <WebSVG className="w-4 h-4 mr-1.5" />
                <Link href="https://halid.dev">halid.dev</Link>
              </span>
              <span className="inline-flex items-center">
                <TwitterSVG className="w-4 h-4 mr-1.5" />
                <Link href="https://twitter.com/imhalid">Twitter</Link>
              </span>
              <span className="inline-flex items-center">
                <GithubSVG className="w-4 h-4 mr-1.5" />
                <Link href="https://github.com/imhalid">GitHub</Link>
              </span>
              <span className="inline-flex items-center">
                <LinkedinSVG className="w-4 h-4 mr-1.5" />
                <Link href="http://www.linkedin.com/in/halitislamicli">Linkedin</Link>
              </span>
            </section>
          </div>
        </div>
        <div>
          <p>
            I have a passion for developing apps that simplify life. Combining my background in design with my programming skills, I aim to contribute to larger projects in this domain. My past career
            experiences have provided me with valuable insights into this field.
          </p>
        </div>
        <div className="mt-3">
          <h2 className="font-bold text-2xl border-b-2 border-neutral-300 ">Work Experience</h2>
          <section className="mt-2">
            <div className="flex flex-row justify-between">
              <p className="font-semibold">Frontend Developer</p>
              <p className="text-sm text-neutral-500">Dec 2022 - Oct 2023</p>
            </div>
            <Link href="https://www.colorwayxpress.com" className="flex items-center text-blue-500">
              <LinkSVG className="w-4 h-4 mr-1.5" />
              DoCode
            </Link>
            <p className="mt-1">
              Developed and deployed ColorwayXpress using Next.js with a focus on UI/UX optimization. Learned Vue.js to introduce new features and fix bugs in existing company projects. Extensively
              involved in API integrations.
            </p>
          </section>
          <section className="mt-2">
            <div className="flex flex-row justify-between">
              <p className="font-semibold">Self Learning</p>
              <p className="text-sm text-neutral-500">Feb 2022 - Present</p>
            </div>
            <Link href="https://github.com/imhalid" className="flex items-center text-blue-500">
              <LinkSVG className="w-4 h-4 mr-1.5" />
              DoCode
            </Link>
            <p className="mt-1">
              Learned React, Next.js, and Vue.js. After acquiring fundamental knowledge of Three.js, I am now focusing on specializing in building websites using WebGL and React Three Fiber. I am also
              learning Blender at an introductory level.
            </p>
          </section>
          <section className="mt-2">
            <div className="flex flex-row justify-between">
              <p className="font-semibold">Graphic Designer, Editor, Data analysis</p>
              <p className="text-sm text-neutral-500">Aug 2016 - Nov 2021</p>
            </div>
            <Link href="https://en.suriyegundemi.com" className="flex items-center text-blue-500">
              <LinkSVG className="w-4 h-4 mr-1.5" />
              Suriye Gündemi
            </Link>
            <p className="mt-1">
              Worked on an impartial platform that disseminates information about Syria. Responsibilities included annotating control zones and essential details onto maps using Photoshop. Prepared
              Excel data for infographic representation and uploaded articles and maps to the website via WordPress.
            </p>
          </section>
        </div>
        <div className="mt-3">
          <h2 className="font-bold text-2xl border-b-2 border-neutral-300 ">Projects</h2>
          <div className="grid grid-cols-2">
            <section>
              <Link href="https://cv-builder.halid.dev" className="flex items-center text-blue-500">
                <LinkSVG className="w-4 h-4 mr-1.5" />
                <span className="font-semibold text-lg">CV Builder</span>
              </Link>
              <p>With this project you can create CVs in real time. You can see your changes live. Changes are saved to your local storage. Built with Next.js, TailwindCSS and ContextAPI.</p>
            </section>
            <section>
              <Link href="https://halid.dev/" className="flex items-center text-blue-500">
                <LinkSVG className="w-4 h-4 mr-1.5" />
                <span className="font-semibold text-lg">halid.dev</span>
              </Link>
              <p>My personal website, that I created with Next.js, TailwindCSS, Content Layer.</p>
            </section>
            <section>
              <Link href="https://weather-imhalid.vercel.app/" className="flex items-center text-blue-500">
                <LinkSVG className="w-4 h-4 mr-1.5" />
                <span className="font-semibold text-lg">Weather App</span>
              </Link>
              <p>This is a small project where I visualize the data obtained with the API provided by OpenWeatherMap.</p>
            </section>
            <section>
              <Link href="https://hikarix.vercel.app/" className="flex items-center text-blue-500">
                <LinkSVG className="w-4 h-4 mr-1.5" />
                <span className="font-semibold text-lg">Hikarix</span>
              </Link>
              <p>
                Built with Next.js and TailwindCSS, this project features R3F (React Three Fiber) implementation, Framer Motion for animations, and TMDB API setup. Zustand was used with persistence
                functionality. First experience with TypeScript.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="font-bold text-2xl border-b-2 border-neutral-300 ">Skills</h2>
          <div className="grid grid-cols-2">
            <section>
              <span className="font-semibold text-lg">Freameworks / Libraries / Languages</span>
              <p>Javascript, Typescript, CSS, HTML, Vue.js, Next.js, React, Tailwind, R3F, Three.js</p>
            </section>
            <section>
              <span className="font-semibold text-lg">Tools & Technologie</span>
              <p>Git, VS Code, Webflow, Photoshop, Final Cut Pro, Figma, Blender</p>
            </section>
          </div>
        </div>

        <div className="mt-3">
          <div className="font-bold text-2xl border-b-2 border-neutral-300 grid grid-cols-2">
            <h2 className=" ">Education</h2>
            <span className="mr-52">Languages</span>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div className="grid grid-cols-2">
                <section>
                  <div>
                    <p>Web Design and Programming</p>
                    <p className="text-neutral-500">Anadolu University</p>
                    <p className="text-neutral-500">2022 - Present</p>
                  </div>
                </section>
                <section>
                  <div>
                    <p>Computer Programming</p>
                    <p className="text-neutral-500">Adnan Menderes University</p>
                    <p className="text-neutral-500">2017 - 2019</p>
                  </div>
                </section>
              </div>
            </div>

            <section>
              <p>Turkish(Native), English(A2)</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}


export  function MailSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="m3 7l9 6l9-6" />
      </g>
    </svg>
  )
}
export  function WebSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13" />
        <path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7" />
      </g>
    </svg>
  )
}
export  function TwitterSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M19.913 5.322a1.034 1.034 0 0 1 .837 1.629l-1.042 1.481c-.064 5.086-1.765 8.539-5.056 10.264A10.917 10.917 0 0 1 9.6 19.835a12.233 12.233 0 0 1-6.2-1.524a.76.76 0 0 1-.317-.8a.768.768 0 0 1 .63-.6a20.6 20.6 0 0 0 3.745-.886C2 13.5 3.19 7.824 3.71 6.081a1.028 1.028 0 0 1 1.729-.422a9.931 9.931 0 0 0 5.995 2.95A4.188 4.188 0 0 1 12.725 5.3a4.125 4.125 0 0 1 5.7.02ZM4.521 17.794c1.862.872 6.226 1.819 9.667.016c2.955-1.549 4.476-4.732 4.521-9.461a.771.771 0 0 1 .142-.436l1.081-1.538l-.041-.053c-.518-.007-1.029-.014-1.55 0a.835.835 0 0 1-.547-.221a3.13 3.13 0 0 0-4.383-.072a3.174 3.174 0 0 0-.935 2.87a.646.646 0 0 1-.154.545a.591.591 0 0 1-.516.205a10.924 10.924 0 0 1-7.084-3.295c-.67 2.078-1.52 7.094 3.869 9.065a.632.632 0 0 1 .416.538a.625.625 0 0 1-.3.6a13.178 13.178 0 0 1-4.186 1.237m15.147-9.305"
      />
    </svg>
  )
}
export  function GithubSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
        <path d="M9 20.027c-3 .973-5.5 0-7-3" />
      </g>
    </svg>
  )
}
export  function LinkedinSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3m0 736c-447.8-.1-671.7-.2-671.7-.3c.1-447.8.2-671.7.3-671.7c447.8.1 671.7.2 671.7.3c-.1 447.8-.2 671.7-.3 671.7M230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8m252.3 245.1c0-49.8 9.5-98 71.2-98c60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9c-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6z"
      />
    </svg>
  )
}
export  function LinkSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M11 17H7q-2.075 0-3.537-1.463T2 12q0-2.075 1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17z"
      />
    </svg>
  )
}

