import Image from 'next/image'
import React from 'react'

const Slider = () => {
  return (
    <div>
        {/*TEXT CONTAIENER */}
        <div className='flex flex-col h-screen'>
            <h1 className='h-1/2'>
                Test
            </h1>

            <button className=''>Order Now</button>
        </div>
        
        {/*IMAGE CONTAIENER */}
        <div className='h-1/2 w-full relative'>
            <Image src="/slide1.png" alt='' fill/>
        </div>
    </div>
  )
}

export default Slider