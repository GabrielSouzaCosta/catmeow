import Head from 'next/head'
import React from 'react'
import Layout from '../../layout/Layout'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5'
import Link from 'next/link'

const About = () => {
  return (
    <>
        <Head>
            <title>
                CatMeow - About
            </title>
        </Head>
        <Layout>
          <div className="container px-6 lg:px-96 mx-auto flex flex-col justify-center my-8 lg:my-4">
            <div className="mb-8">
              <h1 className='text-center text-3xl lg:text-5xl text-dark dark:text-primary mb-4 font-semibold'>
                About This Website
              </h1>
              <p className='text-lg lg:text-xl text-darkSecondary dark:text-lightSecondary'>
                <strong>MeowCat</strong> has the main objective to make people who are stressed from everyday relax while seeing lots of funny, cute and amazing cats. In addition, we want to provide you with interesting facts about these fellow animals.
              </p>
            </div>

            <div className="text-center">
              <h2 className='text-center text-2xl lg:text-4xl text-dark dark:text-primary mb-4 font-semibold'>
                Contact
              </h2>
              <p className='text-lg lg:text-xl text-darkSecondary dark:text-lightSecondary'>
                This Website was created by Gabriel Souza Costa.
              </p>
              <ul className='flex justify-center gap-x-4 mt-4'>
                <li>
                  <Link href="https://www.linkedin.com/in/gabriel-souza-costa-8443481bb/" target="_blank" className='text-secondary dark:text-primary hover:text-dark dark:hover:text-light' >
                    <IoLogoLinkedin size={64} />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/GabrielSouzaCosta/" target="_blank" className='text-secondary dark:text-primary hover:text-dark dark:hover:text-light transition-all'>
                    <IoLogoGithub size={64} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/__gabrielscosta__/" target="_blank" className='text-secondary dark:text-primary hover:text-dark dark:hover:text-light transition-all'>
                    <IoLogoInstagram size={64} />
                  </Link>
                </li>
                <li>
                  <Link href="mailto:gabrielsscosta2010@hotmail.com" target="_blank" className='text-secondary dark:text-primary hover:text-dark dark:hover:text-light transition-all'>
                    <IoMailOutline size={64} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>


            
        </Layout>
      </>
  )
}

export default About