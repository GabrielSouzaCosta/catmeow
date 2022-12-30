import Link from 'next/link'
import React, { useState } from 'react'
import { Logo } from '../components/ui'
import { Squash as Hamburger } from 'hamburger-react'


const Navbar = () => {
  const [ isSidebarToggled, setIsSidebarToggled ] = useState(false);

  return (
    <div className="nav-background sticky top-0 inset-x-0 shadow-sm z-20">
        <nav className='bg-white/0.9 font-secondary z-20'>
            <div className='container py-1.5 mx-auto flex justify-between items-center lg:py-4 px-4 z-30 relative'>
                <Logo />
                <div className="lg:hidden" >
                    <Hamburger toggled={isSidebarToggled} onToggle={() => setIsSidebarToggled(prevState => !prevState)} color={isSidebarToggled ? '#E49E77' : '#505050'} />
                </div>
                <ul className="hidden lg:flex gap-x-16 items-center text-darkSecondary text-2xl ">
                    <li>
                        <Link href="/cats">
                            Cats
                        </Link>
                    </li>
                    <li>
                        <Link href="/facts">
                            Facts
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            Abouts
                        </Link>
                    </li>
                </ul>
            </div>
            <aside className={ ` ${isSidebarToggled ? 'right-0' : '-right-60'} flex lg:hidden fixed inset-y-0 gradient-background transition-all duration-300 w-40 h-screen items-center z-20 drop-shadow-lg rounded-l-sm` }>
                <ul className="flex flex-col gap-y-6 items-center text-darkSecondary text-2xl w-full">
                    <li className='border-b border-primary'>
                        <Link href="/cats">
                            Cats
                        </Link>
                    </li>
                    <li className='border-b border-primary'>
                        <Link href="/facts">
                            Facts
                        </Link>
                    </li>
                    <li className='border-b border-primary'>
                        <Link href="/about">
                            Abouts
                        </Link>
                    </li>
                </ul>
            </aside>
        </nav>
    </div>
  )
}

export default Navbar