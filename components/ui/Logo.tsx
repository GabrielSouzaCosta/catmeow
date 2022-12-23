import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CatLogo from '../../public/images/logo.png'

type Props = {
  hasSlogan?: boolean
}

const Logo = ({ hasSlogan } : Props) => {
  return (
    <Link href='/' className='flex items-center gap-x-2'>
        <Image 
            src={CatLogo}
            alt=""
            height={60}
        />
        {hasSlogan ? 
          <div>
            <h1 className='text-3xl text-primary'>
              CatMeow
            </h1>
            <p className='text-light'>
              Make your day with cats
            </p>
          </div>
          :
          <h1 className='text-3xl text-primary'>
              CatMeow
          </h1>
        }
    </Link>
  )
}

export default Logo