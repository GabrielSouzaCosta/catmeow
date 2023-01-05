import axios, { AxiosResponse } from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import LazyImage from '../../components/LazyImage'
import { ButtonDark } from '../../components/ui/buttons'
import Layout from '../../layout/Layout'
import useFetchCats from '../../utils/hooks/useFetchCats'
import { IoAddOutline } from 'react-icons/io5';
import { CatType } from '../../@types/cat'


const Cats = () => {
  const { data: cats, isLoading, refetch, isRefetching } = useFetchCats();

  return (
    <>
        <Head>
            <title>
               CatMeow - Cats
            </title>
        </Head>
        <Layout>
          <div className='container mx-auto px-6 lg:px-20 text-center py-4'>
              <h1 className='text-center text-3xl lg:text-5xl text-dark dark:text-primary mt-2 lg:mt-6 mb-6 lg:mb-10'>
                Cats Gallery
              </h1>
              {isLoading ? 
                <p className='dark:text-primary'>
                  Loading the most cute cats...
                </p>
                :
                <>
                  <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 justify-center mx-auto mb-8'>
                    {
                      cats?.data.map( ({ url, id, base64 }: CatType)  => {
                        return (
                          <LazyImage key={id} url={url} base64={base64} />
                          )
                        })
                    }
                  </div>
                  <div className="sticky bottom-0 pb-4">
                    <ButtonDark onClick={() => refetch()} isLoading={isRefetching} loadingText="Loading New Cats  &#128062;">
                        <div className="flex items-center gap-x-2">
                          <IoAddOutline size={30} />
                          Get More Cats
                        </div>
                    </ButtonDark>
                  </div>
                </>
                
              }
          </div>
        </Layout>
      </>
  )
}



export default Cats