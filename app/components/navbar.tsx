
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
        </Link>
        {/* <CvModal /> */}
      </div>
      <ul className="flex gap-3">
        {navbarLinks.map(({ name, href }: NavbarLink) => (
          <li key={name}>
            <Link href={href}>
              <span className="line-through touch-none text-neutral-600">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}