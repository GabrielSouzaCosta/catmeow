import Link from 'next/link'
import React from 'react'

import { Logo } from '../components/ui'


const Navbar = () => {
  return (
    <nav className='bg-white/[0.8] font-secondary'>
        <div className='container mx-auto flex justify-between py-4 px-4'>
            <Logo />
            <ul className="flex gap-x-16 items-center text-darkSecondary text-2xl">
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
    </nav>
  )
}

export default Navbar