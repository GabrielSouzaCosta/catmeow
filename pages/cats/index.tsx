import axios, { AxiosResponse } from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import LazyImage from '../../components/LazyImage'
import Layout from '../../layout/Layout'

async function fetchCats() {
  return axios.get('https://api.thecatapi.com/v1/images/search?limit=50', {
    headers: {
      'x-api-key': 'live_4hYkZYrHTAbWpEg7S9vKpeXATQU13uY8PXcOrO3xdbL9DLP3wNQ6MtnuEDc4w3tk'
    }
  })
}

export async function getStaticProps() {
  const response  = await fetchCats()
  const { data } = response
  
  const cats = await Promise.all(
    data.map(async ( data : { url: string } ) => {
      const { base64 } = await getPlaiceholder(data.url);
      return {
        ...data,
        base64: base64,
      };
    })
  ).then((value) => value);
  
  return {
    props: {
      initialCats: cats
    },
  };
}


const Cats = ({ initialCats }: any) => {
  const { isLoading, isError, data: cats, error } = useQuery('cats', fetchCats, { initialData: initialCats })

  console.log(cats)

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
                    cats?.map( ({ url, id, base64 } : { url : string, id: string, base64: string })  => {
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