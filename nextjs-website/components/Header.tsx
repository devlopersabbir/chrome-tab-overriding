import Logo from "./Logo";
import Link from 'next/link'
import { Button } from "./ui/button";
import { TwitterIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 md:px-8 py-10 flex items-center justify-center flex-wrap gap-5 ">
      <Link href="/">
        <Logo />
      </Link>
      <nav className='flex items-center space-x-4'>
        <NavItem href='/' text="Home" />
        <NavItem href='/' text="Updates" />
        <NavItem href='/' text="Support" />
        <TwitterIcon className="h-7 w-7" />
      </nav>
    </header>
  )
}

interface NavItemProps {
  href: string,
  text: string,
}

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  return (
    <Link href={href} className="hover:underline text-lg font-medium">
      {text}
    </Link>
  )
}
