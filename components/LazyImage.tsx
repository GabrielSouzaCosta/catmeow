import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { InferGetStaticPropsType } from 'next';

type Props = {
    url: string,
    base64: string
}

const LazyImage = ({
    url,
    base64
} : Props) => {
  return (
    <div className='w-full h-60 lg:h-80 relative'>
        <Image 
            src={url}
            alt="" 
            layout='fill' 
            className="object-cover rounded-md drop-shadow-lg hover:drop-shadow-2xl dark:drop-shadow-xl transition-all duration-500" 
            blurDataURL={base64}
            placeholder='blur'
        /> 
    </div>
  )
}

export default LazyImage