import axios, { AxiosResponse } from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import LazyImage from '../../components/LazyImage'
import Layout from '../../layout/Layout'
import useFetchCats from '../../utils/hooks/useFetchCats'

type CatType = {
  url: string,
  base64: string,
  id: string,
}

const Cats = () => {
  const { data: cats, isLoading } : any = useFetchCats();

  return (
    <>
        <Head>
            <title>
               CatMeow - Cats
            </title>
        </Head>
        <Layout>
          <div className='container mx-auto px-20 text-center py-2'>
              <h1 className='text-center text-5xl text-dark dark:text-primary my-8'>
                Cats Gallery
              </h1>
              {isLoading ? 
                <p className='dark:text-primary'>
                  Loading the most cute cats...
                </p>
                :
                <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 justify-center mx-auto mb-8'>
                  {
                    cats.data.map( ({ url, id, base64 }: CatType)  => {
                      return (
                        <LazyImage key={id} url={url} base64={base64} />
                      )
                    })
                  }
                </div>
                
              }
          </div>
        </Layout>
      </>
  )
}



export default Cats