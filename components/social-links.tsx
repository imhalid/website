import Link from "next/link"
export default function SocialLinks() {
    return (
        <div className="flex gap-3">
            {
                socialLinks.map((link, index) => (
                    <Link className="text-sm text-neutral-200 hover:text-[#b3ff1a] transition-all" target="_blank" href={link.url} key={index}>
                        {link.name}
                    </Link>
                ))
            }
        </div>
    )
}


export const socialLinks = [
    {
        name: "Github",
        url: "https://github.com/imhalid"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/halidislm"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/halitislamicli/"
    },
    {
        name: "Discord",
        url: "https://discord.com/users/575046796774998026"
    },
    {
        name: "Email",
        url: "mailto:imhalid@icloud.com"
    },
]
