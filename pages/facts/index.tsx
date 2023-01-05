import axios, { AxiosResponse } from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { ButtonPrimary } from '../../components/ui/buttons'
import Layout from '../../layout/Layout'
import useFetchFact from '../../utils/hooks/useFetchFact'
import blurDataImage from '../../utils/services/blurDataImage'
import { IoRefreshCircleOutline } from 'react-icons/io5'

const Facts = () => {
  const {  data: fact, isLoading, refetch, isRefetching } = useFetchFact();
  const { isLoading: isImageLoading, isError: isImageError, data: cat, refetch: refetchImage, error: imageError } = useQuery('catImage', fetchCatImage, {
    refetchInterval: 4500
  })

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
            <div className='container mx-auto text-center py-4 px-6 xl:px-60'>
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
                      className=' rounded-3xl object-cover drop-shadow-xl' 
                      layout='fill'
                      blurDataURL={cat?.data[0].base64}
                      placeholder='blur'
                    />
                  </div>

                  <ButtonPrimary onClick={getNewFact} isLoading={isRefetching} loadingText={'Loading new fact..'}>
                    <div className="flex items-center justify-center gap-x-2">
                      <IoRefreshCircleOutline size={30} />
                      New Cat Fact
                    </div>
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