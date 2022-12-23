import Head from 'next/head'
import Image from 'next/image'
import { ButtonPrimary, ButtonPrimaryOutline, ButtonWhite, ButtonDark } from '../components/ui/buttons'
import Layout from '../layout/Layout'

import OrangeCat from '../public/images/orange-cat-sleeping.png'
import CuriousCat from '../public/images/curious-cat.png'
import OrangeCatLookingUp from '../public/images/orange-cat-lookingup.png'
import GrayCatWithSunglasses from '../public/images/gray-cat-sunglasses.png'
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
          <div className="container mx-auto">

            <div className="flex items-center justify-center gap-x-20">

              <div className="flex flex-col gap-y-6">
                <h1>
                  Make Your Day By <span>Cats</span>
                </h1>
                <p>
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
  <div className='flex flex-col'>
    <Image src={OrangeCat} alt="" />
  </div>
)

const PillSection = () => (
  <section className='min-h-50vh flex items-center w-full'>
    <div className="flex rounded-full w-full py-4 relative home-pill-button">
      <Image src={CuriousCat} alt="" className='absolute inset-y-0 left-0 h-full w-fit object-contain p-1' /> 
      <div className='mx-auto text-center'>
        <h2 className='text-4xl'>
          Having a bad day?
        </h2>
        <p className='text-xl'>
          Take a rest and find cute cats to make you better
        </p>
      </div>
    </div>
  </section>
)

const CatsPhotosSection = () => (
  <section className='flex min-h-80vh items-center w-full'>
    <div className="flex justify-center gap-x-12 items-center w-full">
      <div>
        <h4>
          Find Cute Cats
        </h4>
        <p>
          Find cute and funny cats in the cats photos generator
        </p>
        <ButtonDark>
          I want to discover them!
        </ButtonDark>
      </div>
      <Image src={OrangeCatLookingUp} alt="" />
      <Image src={GrayCatWithSunglasses} alt="" />
    </div>
  </section>
)

const CatFactsSection = () => (
  <section className='flex min-h-80vh items-center w-full mb-16'>
    <div className="flex justify-center gap-x-12 items-center w-full">
      <Image src={CatButterfly} alt="" />
      <div>
        <h4>
          Cats Facts
        </h4>
        <p>
          Learn More about these smart and cute animals.
        </p>
        <ButtonWhite>
          Learn More About Cats
        </ButtonWhite>
      </div>
    </div>
  </section>

)