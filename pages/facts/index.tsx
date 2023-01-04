import axios, { AxiosResponse } from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { ButtonPrimary } from '../../components/ui/buttons'
import Layout from '../../layout/Layout'
import blurDataImage from '../../utils/services/blurDataImage'

const Facts = () => {
  const { isLoading, isError, data: fact, refetch, error } = useQuery('facts', fetchFact)
  const { isLoading: isImageLoading, isError: isImageError, data: cat, refetch: refetchImage, error: imageError } = useQuery('catImage', fetchCatImage)

  function fetchFact() {
    return axios.get('https://catfact.ninja/fact')
  }

  async function fetchCatImage() {
    return await axios.get('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': 'live_4hYkZYrHTAbWpEg7S9vKpeXATQU13uY8PXcOrO3xdbL9DLP3wNQ6MtnuEDc4w3tk'
      }
    }).then(res => {
      return blurDataImage(res);
    })
  }

  async function getNewFact() {
    await refetchImage()
    refetch()
  }

  return (
    <>
        <Head>
            <title>
                CatMeow - Cat Facts
            </title>
        </Head>

        <Layout>
          <div className="flex min-h-80vh items-center">
            <div className='container mx-auto text-center py-2 px-6 xl:px-60'>
              { isLoading || isImageLoading ? 
                <p className='text-xl dark:text-primary'>
                  Loading Fact...
                </p>
                :
                <>
                  <h1 className='text-center text-4xl lg:text-5xl text-dark dark:text-primary my-4'>
                    Cat Facts
                  </h1>
                  <p className='text-darkSecondary dark:text-light text-lg lg:text-2xl'>
                    &quot;{fact && fact?.data?.fact}&quot;
                  </p>

                  <div className="relative w-80 h-60 mx-auto my-6">
                    <Image 
                      src={cat?.data[0].url} 
                      alt="Cat Image" 
                      className=' rounded-3xl object-cover' 
                      layout='fill'
                      blurDataURL={cat?.data[0].base64}
                      placeholder='blur'
                    />
                  </div>

                  <ButtonPrimary onClick={getNewFact}>
                    New Cat Fact
                  </ButtonPrimary>
                </>
              }
            </div>
          </div>
        </Layout>
      </>
  )
}

export default Facts