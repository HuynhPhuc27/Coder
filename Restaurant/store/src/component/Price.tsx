'use client'
import { ProductType } from '@/types/types';
import { useCartStore } from '@/utils/store';
import { constants } from 'buffer';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Price = ({product}: { product: ProductType }) => {
    const [total, setTotal] = useState(product.price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    const {addToCart} = useCartStore();
    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, [])

    useEffect(() => {
        if (product.options?.length){
            setTotal(
                quantity * (Number(product.price) + Number(product.options[selected].additionalPrice))
            );
        }
    }, [quantity, selected, product])

    const handleCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: total,
            img: product.img,
            ...(product.options?.length && {
                optionTitle: product.options[selected].title
            }),
            quantity: quantity
        })
        toast.success("Added to cart!")
    }

  return (
    <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>${total}</h1>
        {/* OPTIONS */}
        <div className='flex gap-4'>
            {product.options?.length && product.options.map((option, index) => (
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
            <button className='ring-1 w-56 ring-red-500 bg-red-500 text-white p-3' 
                    onClick={handleCart}>
                Add to Cart
            </button>
        </div>
        
    </div>
  )
}

export default Price