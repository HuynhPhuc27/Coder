'use client'
import { constants } from 'buffer';
import React, { useEffect, useState } from 'react'
type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
}
const Price = ({price, id, options}: Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(
            quantity * (options ? price+options[selected].additionalPrice : price)
        )
    }, [quantity, selected])

  return (
    <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>${total.toFixed(2)}</h1>
        {/* OPTIONS */}
        <div className='flex gap-4'>
            {options?.map((option, index) => (
                <button key={option.title} 
                        className='min-w-25 ring-1 ring-red-500 rounded-md p-2 cursor-pointer'
                        style={{
                            background: selected === index ? "rgb(242, 90, 97)" : "white",
                            color: selected === index ? "white" : "red"
                        }}
                        onClick={() => setSelected(index)}
                        
                >{option.title}</button>
            ))}
        </div>

        {/*QUANTITY AND BUTTON*/}
        <div className='flex justify-between items-center'>
            {/*QUANTITY*/}
            <div className='flex ring-1 w-full ring-red-500 justify-between p-3 '>
                <span className=''>Quantity</span>
                <div className='flex items-center gap-4'>
                    <button className='cursor-pointer' onClick={() => setQuantity(prev => (prev > 1 ? prev-1 : 1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button className='cursor-pointer' onClick={() => setQuantity(prev => (prev < 9) ? prev+1 : 9)}>{'>'}</button>
                </div>
            </div>
            <button className='ring-1 w-56 ring-red-500 bg-red-500 text-white p-3'>Add to Cart</button>
        </div>
        
    </div>
  )
}

export default Price