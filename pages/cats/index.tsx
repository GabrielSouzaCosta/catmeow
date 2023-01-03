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
  const { data, isLoading } : any = useFetchCats();
  const [cats, setCats] = useState<CatType[]>([]);

  async function getBlurredCats () {
    const blurCats = 
      data?.data.forEach(( data : { url: string } ) => {
          axios.get('/api/blur', {
              params: {
                  url: data.url
              }
          })
          .then(res => setCats((prevState: any) => prevState ? [...prevState, { ...data, base64: res.data.base64 }] : [{...data, base64: res.data.base64}] ) 
          
        )
      })
  }
  
  useEffect(() => {
    if (!isLoading) {
      getBlurredCats();
    }
  }, [isLoading]) 

  return (
    <>
        <Head>
            <title>
               CatMeow - Cats
            </title>
        </Head>
        <Layout>
          <div className='container mx-auto px-20 text-center py-2'>
              <h1 className='text-center text-5xl text-dark my-8'>
                Cats Gallery
              </h1>
              {isLoading ? 
                <p>
                  Loading the most cute cats...
                </p>
                :
                <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 justify-center mx-auto mb-8'>
                  {
                    cats.map( ({ url, id, base64 })  => {
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