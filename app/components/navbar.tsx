
import Link from "next/link"
import CvModal from "@/app/components/cv-modal"
type NavbarLink = {
  name: string
  href: string
}

const navbarLinks = [
  {
    name: 'Projects',
    href: '/'
  },
  {
    name: 'Watches',
    href: '/'
  },
  {
    name: 'Bookmarks',
    href: '/'
  }
]


export default function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-between w-full">
      <div className="flex flex-col">
        <Link href="/">
          Halid
          <span> - </span>
          <span className="text-neutral-500">
            Frontend Developer
          </span>
        </Link>
        <CvModal />
      </div>
      <ul className="flex gap-3">
        {navbarLinks.map(({ name, href }: NavbarLink) => (
          <li key={name}>
            <Link href={href}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}