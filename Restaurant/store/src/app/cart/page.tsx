'use client'
import { useCartStore } from '@/utils/store';
import Image from 'next/image'
import React, { useEffect } from 'react'


const CartPage = () => {
  const {products, totalItems, totalPrice, removeFromCart} = useCartStore();
  useEffect(() => {
          useCartStore.persist.rehydrate();
  }, [])
  return (
    <div className=' h-[calc(100vh-9rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* PRODUCT */}
      <div className='h-1/2 flex flex-col p-4 justify-between overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 '>
        {/* SINGLE */}
        {products.map((item) => (
        <div className='flex justify-between items-center mb-4 ' key={item.id}>
          <div>
            {item.img && (<Image src={item.img} alt='' width={100} height={100} />)}
          </div>
          <div>
            <h1 className='font-bold uppercase text-xl'>{item.title} x {item.quantity}</h1>
            <span >{item.optionTitle}</span>
          </div>

          <h2 className='font-bold'>$24.90</h2>
          <span className='cursor-pointer' onClick={() => removeFromCart(item)}>
            X
          </span>
        </div> 
        ))}       
      </div>
      {/* BILL */}
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col justify-center gap-2 lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span>Subtotal ({totalItems} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className='flex justify-between'>
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>

        <div className='flex justify-between'>
          <span>Delivery Cost</span>
          <span className='text-green-500'>FREE</span>
        </div>
        <hr className='my-2'/>

        <div className='flex justify-between'>
          <span>TOTAL(INCL. VAT)</span>
          <span className='font-bold'>${totalPrice.toFixed(2)}</span>
        </div>
        <button className='self-end bg-red-500 text-white px-6 py-2 rounded-md'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage