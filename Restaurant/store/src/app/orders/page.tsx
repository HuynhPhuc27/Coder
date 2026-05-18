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
  }, [status, router])
  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'], 
    queryFn: async () => {
      const res = await fetch('/api/orders', {
        credentials: 'same-origin',
      })
      if (!res.ok) {
        const message = await res.text()
        throw new Error(message || 'Failed to load orders')
      }
      return res.json()
    },
  })

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;

    const status = input.value;
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Failed to update order");
      }
      // Optionally, you can refetch the orders after a successful update
      // queryClient.invalidateQueries(['orders']);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "An error occurred while updating the order");
    }
  }


  if (isLoading || status === "loading") return 'Loading...'
  
  if (error) return <div className='p-4 text-red-600'>Unable to load orders. {error instanceof Error ? error.message : ''}</div>
  if (!Array.isArray(data)) return <div className='p-4'>No orders available.</div>

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
          {data.map((item: OrderType) => (
            <tr key={item.id} className='text-sm md:text-base bg-red-100'>
              <td className='hidden md:block px-1 py-6'>{item.id}</td>
              <td className='px-1 py-6'>{item.createdAt.toString().slice(0, 10)}</td>
              <td className='px-1 py-6'>{item.price}</td>
              <td className='hidden md:block px-1 py-6'>
                 {item.products[0].title}
              </td>
              {
                session?.user?.isAdmin ? (
                  <td>
                    <form className='flex justify-center items-center gap-4' onSubmit={(e) => handleUpdate(e, item.id)}>
                      <input placeholder={item.status} className='p-2 ring-1 ring-red-100 rounded-md'/>
                      <button className='bg-red-400 p-2 rounded-full cursor-pointer'>
                        <img src="/edit.png" alt="Edit" width={20} height={20}/>
                      </button>
                    </form>
                  </td>
                ) : (
                  <td className='px-1 py-6'>{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OtherPage 