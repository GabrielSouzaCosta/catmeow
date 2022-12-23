import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { ButtonDark } from '../components/ui/buttons'
import Layout from '../layout/Layout'
import MadCat from '../public/images/mad-cat.png'

const NotFoundPage = () => {
  return (
      <>
        <Head>
            <title>
                Page Not Found
            </title>
        </Head>
        <Layout>
            <div className='text-center mx-auto py-2'>
                <Image src={MadCat} alt="" height={120} className="text-center mx-auto mb-2" />
                <p className='text-6xl mb-2'>
                    404
                </p>
                <p className='text-xl mb-2'>
                    Page Not Found
                </p>
                <ButtonDark>
                    Go Back to Safety
                </ButtonDark>
            </div>
        </Layout>
      </>
  )
}

export default NotFoundPage