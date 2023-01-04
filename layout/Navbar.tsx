import Link from 'next/link'
import React, { useState } from 'react'
import { Logo } from '../components/ui'
import { Squash as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useStateContext } from '../context/ContextProvider'


const Navbar = () => {
  const [ isSidebarToggled, setIsSidebarToggled ] = useState(false);
  const router = useRouter();
  const currRoute = router.pathname;

  const context = useStateContext();

  return (
    <div className="nav-background sticky top-0 inset-x-0 shadow-sm z-20">
        <nav className='bg-white/0.9 font-secondary z-20'>
            <div className='container py-1.5 mx-auto flex justify-between items-center lg:py-4 px-4 z-30 relative'>
                <Logo />
                <div className="lg:hidden" >
                    <Hamburger toggled={isSidebarToggled} onToggle={() => setIsSidebarToggled(prevState => !prevState)} color={isSidebarToggled ? '#E49E77' : '#505050'} />
                </div>
                <ul className="hidden lg:flex gap-x-16 items-center text-darkSecondary text-2xl">
                    <li >
                        <Link href="/cats" className={currRoute === '/cats' ? 'text-primary border-b border-primary' : 'hover:text-primary transition-all'}>
                                Cats
                        </Link>
                    </li>
                    <li>
                        <Link href="/facts" className={currRoute === '/facts' ? 'text-primary border-b border-primary' : 'hover:text-primary transition-all'}>
                            Facts
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={currRoute === '/about' ? 'text-primary border-b border-primary' : 'hover:text-primary transition-all'}>
                            Abouts
                        </Link>
                    </li>
                    <div className="bg-light rounded-full p-2 shadow-2xl">
                        {context?.theme &&
                          <DarkModeSwitch
                              checked={context?.theme === 'dark'}
                              onChange={(checked) => context?.toggleTheme(checked)}
                              sunColor={'#E49E77'}
                              moonColor={'#000'}
                              size={50}
                          />
                        }
                    </div>
                </ul>
            </div>
            <aside className={ ` ${isSidebarToggled ? 'right-0' : '-right-60'} flex lg:hidden fixed inset-y-0 gradient-background transition-all duration-300 w-40 h-screen items-center z-20 drop-shadow-lg rounded-l-sm` }>
                <ul className="flex flex-col gap-y-6 items-center text-darkSecondary text-2xl w-full">
                    <li>
                        <Link href="/cats" className={currRoute === '/cats' ? 'text-primary border-b border-primary' : 'hover:text-primary transition-all'}>
                            Cats
                        </Link>
                    </li>
                    <li className={currRoute === '/facts' ? 'text-primary border-b border-primary' : 'hover:text-primary transition-all'}>
                        <Link href="/facts">
                            Facts
                        </Link>
                    </li>
                    <li className={currRoute === '/about' ? 'text-primary border-b border-primary' : 'hover:text-primary transition-all'}>
                        <Link href="/about">
                            Abouts
                        </Link>
                    </li>
                    {context?.theme &&
                      <DarkModeSwitch
                          checked={context?.theme === 'dark'}
                          onChange={(checked) => context?.toggleTheme(checked)}
                          sunColor={'#E49E77'}
                          moonColor={'#000'}
                          size={50}
                      />
                    }
                </ul>
            </aside>
        </nav>
    </div>
  )
}

export default Navbar