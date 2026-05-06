import Price from '@/component/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen text-red-500 flex flex-col md:flex-row justify-around items-center md:gap-4'>
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={singleProduct.img} alt="" fill className='object-contain'/>
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className='flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6'>
        <h1 className='font-bold text-3xl uppercase md:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  )
}

export default SingleProductPage