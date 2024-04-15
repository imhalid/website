// import Link from "next/link";
import {Link } from 'next-view-transitions'
type NavbarLink = {
  name: string;
  href: string;
};

const navbarLinks = [
  {
    name: "Projects",
    href: "/projects",
  },
  // {
  //  name: 'Blog',
  //  href: '/blog'
  // }
];

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex w-full justify-between">
      <div className="flex flex-col">
        <Link href="/">Halid</Link>
      </div>
      <ul className="flex gap-3">
        {navbarLinks.map(({ name, href }: NavbarLink) => (
          <li key={name}>
            <Link href={href}>
              <span className="text-neutral-200 hover:text-green-400">
                {name}
              </span>
            </Link>
          </li>
        ))}
        <Link
          href="https://drive.google.com/file/d/1r5WPQwTGTtleRavqkJueQGSz98I7xAwJ/view?usp=sharing"
          prefetch={true}
          target="_blank"
        >
          <span className="text-neutral-200 hover:text-green-400">CV</span>
        </Link>
      </ul>
    </nav>
  );
}
