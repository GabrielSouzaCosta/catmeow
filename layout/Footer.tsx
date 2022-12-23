import Link from 'next/link'
import React from 'react'
import { Logo } from '../components/ui'

const Footer = () => {
  return (
    <footer className='bg-dark font-secondary'>

      <div className='container mx-auto px-2 py-4'>

        <div className='flex items-center justify-between'>
          <Logo hasSlogan />
          <ul className="flex gap-x-16 items-center text-light text-2xl">
              <li>
                  <Link href="/">
                      Home
                  </Link>
              </li>
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
                      About
                  </Link>
              </li>
          </ul>
        </div>

      </div>

      <div className='py-2 bg-[#454545]'>
        <div className="container text-light mx-auto">
          <div className="flex justify-between">
            <p>
              Copyright © 2022 CatMeow
            </p>
            <p>
              Website developed by Gabriel S. Costa
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer