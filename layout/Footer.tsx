import Link from 'next/link'
import React from 'react'
import { Logo } from '../components/ui'

const Footer = () => {
  return (
    <footer className='bg-dark font-secondary drop-shadow-[0_0px_-10px_rgba(0,0,0,0.25)]'>

      <div className='container mx-auto px-2 py-4'>

        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <Logo hasSlogan />
          <ul className="flex gap-x-6 lg:gap-x-16 items-center text-light lg:text-2xl mt-4 ">
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
          <div className="flex justify-between text-xs lg:text-lg px-4 lg:px-2">
            <p>
              Copyright © 2022 CatMeow
            </p>
            <p>
              Developed by Gabriel S. Costa
            </p>
            
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer