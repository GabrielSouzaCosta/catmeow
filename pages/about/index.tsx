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
          <div className="container lg:px-96 mx-auto flex flex-col justify-center my-4">
            <div className="mb-8">
              <h1 className='text-center text-5xl text-dark mb-4'>
                About This Website
              </h1>
              <p className='text-xl text-dark'>
                <strong>MeowCat</strong> has the main objective to make people who are stressed from everyday relax while seeing lots of funny, cute and amazing cats. In addition, we want to provide you with interesting facts about these fellow animals.
              </p>
            </div>

            <div className="text-center">
              <h2 className='text-center text-4xl text-dark mb-4'>
                Contact
              </h2>
              <p className='text-xl text-dark'>
                This Website was created by Gabriel Souza Costa.
              </p>
              <ul className='flex justify-center gap-x-4 mt-4'>
                <li>
                  <Link href="https://www.linkedin.com/in/gabriel-souza-costa-8443481bb/" target="_blank">
                    <IoLogoLinkedin size={64} className="text-primary" />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/GabrielSouzaCosta/" target="_blank">
                    <IoLogoGithub size={64} className="text-primary" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/__gabrielscosta__/" target="_blank">
                    <IoLogoInstagram size={64} className="text-primary" />
                  </Link>
                </li>
                <li>
                  <Link href="mailto:gabrielsscosta2010@hotmail.com" target="_blank">
                    <IoMailOutline size={64} className="text-primary" />
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