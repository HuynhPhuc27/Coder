import { ProductType } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
    cache: "no-store"
  })

  if (!res.ok){
    throw new Error("Failed");
  }

  return res.json();
}

type Props ={
  params: Promise<{category: string}>
}

const SinglePage = async({params}: Props) => {
  const {category} = await params
  const product:ProductType[] = await getData(category)
  return (
    <div className='flex flex-wrap text-red-500'>
      {product.map((item) => (
        <Link className="border-b-2 border-r-2 w-full h-[60vh] border-red-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-center group even:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (<div className='relative h-[80%]'>
            <Image src={item.img} alt="" fill className='object-contain'/>
          </div>)}

          {/* TEXT CONTAINER */}
          <div className='flex items-center justify-between p-4 font-bold'>
            <h1 className='text-2xl uppercase'>{item.title}</h1>
            <h2 className='group-hover:hidden'>${item.price}</h2>
            <button className='hidden group-hover:block bg-red-600 rounded-md text-white py-2 px-3'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SinglePage