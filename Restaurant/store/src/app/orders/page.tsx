'use client'
import { OrderType } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const OtherPage = () => {
  const {data:session, status} = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated"){
      router.push("/");
    }
  })
  const { isPending, error, data } = useQuery({
    queryKey: ['orders'], 
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then((res) =>
        res.json(),
      ),
  })

  if (isPending || status ==="loading") return 'Loading...'

  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-2'>
        <thead className='text-left'>
          <tr>
            <th className='hidden md:block px-1 py-6'>Orders Id</th>
            <th className='px-1 py-6'>Date</th>
            <th className='px-1 py-6'>Price</th>
            <th className='hidden md:block'>Products</th>
            <th className='px-1 py-6'>Status</th>
          </tr>
        </thead>
        <tbody>
          { data.map((item: OrderType) => (
            <tr className='text-sm md:text-base bg-red-100 key={item.id}'>
            <td className='hidden md:block px-1 py-6'>1237861238721</td>
            <td className='px-1 py-6'>19.07.2023</td>
            <td className='px-1 py-6'>89.90</td>
            <td className='hidden md:block px-1 py-6'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='px-1 py-6'>On the way (approx. 10min)...</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OtherPage 