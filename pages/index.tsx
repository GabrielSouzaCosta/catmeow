import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { ButtonPrimary, ButtonPrimaryOutline, ButtonWhite, ButtonDark } from '../components/ui/buttons'
import Layout from '../layout/Layout'

import OrangeCat from '../public/images/orange-cat-sleeping.png'
import CuriousCat from '../public/images/curious-cat.png'
import SectionImage from '../public/images/section-image.png'
import CatButterfly from '../public/images/cat-butterfly.png'
import { useQueryClient } from 'react-query'
import { getCats } from '../utils/services/getCats'
import { getFact } from '../utils/services/getFact'

export default function Home() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchCats = async () => {
      await queryClient.prefetchQuery('cats', getCats)
    }
    const prefetchFact = async () => {
      await queryClient.prefetchQuery('fact', getFact)
    }
    prefetchCats();
    prefetchFact();
  })

  return (
    <>
      <Head>
        <title>CatMeow</title>
        <meta name="description" content="Website to generate cat photos and discover more about this awesome animals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <div className="container mx-auto px-8 xl:px-40">
            <Header />

            <PillSection />

            <CatsPhotosSection />

            <CatFactsSection />

          </div>
      </Layout>
    </>
  )
}

const Header = () => (
  <header>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 min-h-80vh mt-8">
      <div className="flex flex-col gap-y-4 lg:gap-y-6 flex-wrap">
        <h1 className='text-5xl xl:text-6xl text-dark dark:text-lightSecondary'>
          Make Your Day By <span className='text-primary font-bold'>Cats</span>
        </h1>
        <p className='lg:text-2xl text-darkSecondary dark:text-lightSecondary'>
          Discover new facts about them or be addicted on looking cute kittens
        </p>
        <div className="flex gap-x-4">
          <ButtonPrimary>
            Cute Cats
          </ButtonPrimary>
          <ButtonPrimaryOutline>
            Cat Facts
          </ButtonPrimaryOutline>
        </div>
      </div>
      <div className='relative w-60 h-60 xl:w-80 xl:h-80 my-8'>
        <Image src={OrangeCat} alt="" fill className='object-contain hover:drop-shadow-xl transition-all duration-300' />
      </div>
    </div>
  </header>
  
)

const PillSection = () => (
  <section className='flex items-center w-full py-20'>
    <div className="flex items-center rounded-full w-full py-1 relative home-pill-button hover:drop-shadow-xl transition-all duration-500">
      <div className="relative w-16 h-16 lg:w-24 lg:h-24">
        <Image
          src={CuriousCat}
          alt=""
          className='sticky inset-y-0 object-cover p-1'
          fill
        />
      </div>
        
      <div className='mx-auto text-center px-2'>
        <h2 className='text-xl lg:text-4xl mb-2 font-bold text-darkSecondary'>
          Having a bad day?
        </h2>
        <p className='text-sm lg:text-xl text-darkSecondary'>
          Find funny cats to make you better &#128521;
        </p>
      </div>
    </div>
  </section>
)

const CatsPhotosSection = () => (
  <section className='flex min-h-80vh items-center w-full'>
    <div className="flex flex-col lg:flex-row justify-between gap-x-2 w-full">
      <div className='mt-[15%]'>
        <h4 className='text-dark font-bold text-3xl lg:text-5xl mb-1.5 dark:text-light'>
          Cats Gallery
        </h4>
        <p className='text-md lg:text-xl mb-6 text-darkSecondary dark:text-lightSecondary'>
          Find cute and funny cats in the cats photos generator
        </p>
        <ButtonDark>
          I want to discover them!
        </ButtonDark>
      </div>
      
        <Image 
          src={'/images/section-image.png'} 
          alt="" 
          width={600}
          height={200}
          sizes="(max-width: 768px) 100vw, 50vw,
          "
          className='mt-6 lg:mt-0 hover:drop-shadow-xl transition-all duration-300'
        />
      
    </div>
  </section>
)

const CatFactsSection = () => (
  <section className='flex min-h-80vh items-center w-full mb-16'>
    <div className="flex flex-col-reverse lg:flex-row gap-x-4 lg:gap-x-20 items-center w-full">
      <div className="relative w-80 h-80 lg:h-[500px] lg:w-96">
        <Image
          src={CatButterfly}
          alt=""
          className='object-contain p-1 mt-4 lg:mt-0 hover:drop-shadow-xl transition-all duration-300'
          fill
        />
      </div>
      <div>
        <h4 className='text-dark font-bold text-3xl lg:text-5xl mb-1.5 dark:text-light'>
          Caty Facts
        </h4>
        <p className='text-darkSecondary text-md lg:text-xl mb-4 lg:mb-8 dark:text-lightSecondary'>
          Learn More about these smart and cute animals.
        </p>
        <ButtonWhite>
          Learn More About Cats
        </ButtonWhite>
      </div>
    </div>
  </section>

)