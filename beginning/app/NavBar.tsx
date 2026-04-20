'use client';
import React from 'react'
import Link from 'next/link'
import { IoBug } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';
const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {name: "Dashboard", href: '/'},
    {name: "Issue", href: '/issue'},
  ]  
  return (
    <nav className="flex flex-wrap gap-8 border-b-2 mb-5 px-5 h-14 items-center border-gray-300">
        <Link href="/"><IoBug /></Link>
        <ul className="flex space-x-8">
            {links.map(link => 
                <Link 
                  key={link.href }
                  className={
                    classnames({
                      'text-zinc-800': currentPath === link.href,
                      'text-zinc-500': currentPath !== link.href,
                      'text-zinc-400 hover:text-zinc-800 transition-colors': true,
                    })
                  } 
                  href={link.href}>{link.name}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar