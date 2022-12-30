import Head from 'next/head'
import Image from 'next/image'
import { ButtonPrimary, ButtonPrimaryOutline, ButtonWhite, ButtonDark } from '../components/ui/buttons'
import Layout from '../layout/Layout'

import OrangeCat from '../public/images/orange-cat-sleeping.png'
import CuriousCat from '../public/images/curious-cat.png'
import SectionImage from '../public/images/section-image.png'
import CatButterfly from '../public/images/cat-butterfly.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>CatMeow</title>
        <meta name="description" content="Website to generate cat photos and discover more about this awesome animals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <header>
          <div className="container mx-auto px-8 xl:px-40">

            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 min-h-80vh mt-8">
              <div className="flex flex-col gap-y-4 lg:gap-y-6 flex-wrap">
                <h1 className='text-5xl xl:text-6xl text-dark'>
                  Make Your Day By <span className='text-primary font-bold'>Cats</span>
                </h1>
                <p className='lg:text-2xl text-darkSecondary'>
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
              <HeaderImage />
            </div>


            <PillSection />

            <CatsPhotosSection />

            <CatFactsSection />

          </div>
        </header>
      </Layout>
    </>
  )
}

const HeaderImage = () => (
  <div className='relative w-60 h-60 xl:w-80 xl:h-80 my-8'>
    <Image src={OrangeCat} alt="" fill className='object-contain' />
  </div>
)

const PillSection = () => (
  <section className='flex items-center w-full py-20'>
    <div className="flex items-center rounded-full w-full py-1 relative home-pill-button">
      <div className="relative w-20 h-20 lg:w-24 lg:h-24">
        <Image
          src={CuriousCat}
          alt=""
          className='sticky inset-y-0 object-cover p-1'
          fill
        />
      </div>
        
      <div className='mx-auto text-center px-2'>
        <h2 className='text-xl lg:text-4xl mb-2 font-bold'>
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
    <div className="flex justify-between gap-x-2 w-full">
      <div className='mt-[15%]'>
        <h4 className='text-dark text-5xl mb-1.5'>
          Find Cute Cats
        </h4>
        <p className='text-2xl mb-6 text-darkSecondary  '>
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
        />
      
    </div>
  </section>
)

const CatFactsSection = () => (
  <section className='flex min-h-80vh items-center w-full mb-16'>
    <div className="flex gap-x-40 items-center w-full">
      <Image src={CatButterfly} alt="" />
      <div>
        <h4 className='text-dark text-5xl mb-1.5'>
          Cats Facts
        </h4>
        <p className='text-darkSecondary text-xl mb-8'>
          Learn More about these smart and cute animals.
        </p>
        <ButtonWhite>
          Learn More About Cats
        </ButtonWhite>
      </div>
    </div>
  </section>

)