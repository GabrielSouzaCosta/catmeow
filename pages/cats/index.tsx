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
  const [cats, setCats] = useState<CatType[] | null>(null);
  const { data, isLoading, refetch, isRefetching } = useFetchCats();

  console.log(cats)  

  return (
    <>
        <Head>
            <title>
               CatMeow - Cats
            </title>
        </Head>
        <Layout>
          <div className='container mx-auto px-6 lg:px-20 text-center py-4'>
              <h1 className='text-center text-5xl text-dark dark:text-primary mt-6 mb-10'>
                Cats Gallery
              </h1>
              {isLoading && !cats ? 
                <p className='dark:text-primary'>
                  Loading the most cute cats...
                </p>
                :
                <>
                  <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 justify-center mx-auto mb-8'>
                    {
                      data?.data.map( ({ url, id, base64 }: CatType)  => {
                        return (
                          <LazyImage key={id} url={url} base64={base64} />
                          )
                        })
                    }
                  </div>
                  <ButtonDark onClick={() => refetch()}>
                      <div className="flex items-center gap-x-2">
                        <IoAddOutline size={30} />
                        Get More Cats
                      </div>
                  </ButtonDark>
                </>
                
              }
          </div>
        </Layout>
      </>
  )
}



export default Cats