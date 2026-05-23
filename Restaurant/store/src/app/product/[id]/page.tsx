import DeleteButton from '@/component/DeleteButton'
import Price from '@/component/Price'
import { singleProduct } from '@/data'
import { ProductType } from '@/types/types'
import Image from 'next/image'
import React from 'react'


const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store"
  })

  if (!res.ok){
    throw new Error("Failed");
  }

  return res.json();
}


const SingleProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const singleProduct:ProductType = await getData(id);

  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen text-red-500 flex flex-col md:flex-row justify-around items-center md:gap-4 relative'>
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
        <Price product={singleProduct}/>
      </div>

      <DeleteButton id={singleProduct.id} />
    </div>
  )
}

export default SingleProductPage