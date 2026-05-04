import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/*SINGLE ITEM */}
        {
        featuredProducts.map((item) => (
          <div key={item.id} className='w-screen h-[60vh] flex flex-col justify-around items-center p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]'>
            {/*IMAGE CONTAINER */}
            {item.img && (<div className='relative flex-1 w-full hover:rotate-[40deg] transition-all duration-500'>
              <Image src={item.img} alt ="" fill className='object-contain'/>
            </div>
          )}

            <div className='flex flex-1 flex-col gap-4 justify-center items-center text-center '>
              {/*TEXT CONTAINER */}
              <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
              <p className='p-2 2xl:p-4'>{item.desc}</p>
              <span className='text-xl font-bold'>${item.price}</span>
              <button className='bg-red-500 rounded-md text-white p-2'>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured