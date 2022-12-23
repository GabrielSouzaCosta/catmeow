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
    <div className='w-full h-80 relative'>
        <Image 
            src={url}
            alt="" 
            layout='fill' 
            className="object-cover" 
            blurDataURL={base64}
            placeholder='blur'
        /> 
    </div>
  )
}

export default LazyImage