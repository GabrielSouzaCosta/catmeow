import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children } : Props) => {
  const context = useStateContext();

  return ( 
    <div className={`min-h-screen flex flex-col justify-between`}>
        <Navbar />
          <div>
            { children }
          </div>
        <Footer />
    </div>
  )
}

export default Layout