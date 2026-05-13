'use client'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Loginpage = () => {
  const {data, status} = useSession();
  console.log("Data: " + data);
  console.log("Status: " + status);
  
  return (
    <div className='h-[calc(100vh-9rem)] md:h-[calc(100vh-9rem)] flex justify-center items-center p-4'>
      {/*BOX*/}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2'>
        {/*IMAGE*/}
        <div className='relative w-full h-1/3 md:h-full md:w-1/2'>
          <Image src="/loginBg.png" alt="" fill className='object-cover'/>
        </div>
        {/*FORM*/}
        <div className='flex flex-col p-6 gap-8 justify-center'>
          <h1 className='font-bold text-xl xl:text-3xl'>Welcom</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md cursor-pointer' onClick={() => signIn("google")}>
            <Image src="/google.png"  alt="" width={20} height={20} className='object-contain'/>
            <span>Sign in with Google</span>
          </button>
          <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md cursor-pointer'>
            <Image src="/facebook.png"  alt="" width={20} height={20} className='object-contain'/>
            <span>Sign in with Facebook</span>
          </button>
          <p>
            Have a problem?
            <Link href="/" className='underline'>  Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loginpage