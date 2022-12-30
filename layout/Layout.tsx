import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children } : Props) => {
  return ( 
    <div className='min-h-screen flex flex-col justify-between body-background'>
        <Navbar />
          <div>
            { children }
          </div>
        <Footer />
    </div>
  )
}

export default Layout