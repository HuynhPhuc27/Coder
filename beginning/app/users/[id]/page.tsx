import React from 'react'

const UserPage = async({params} : {params: Promise<{id: string} >}) => {
  const id = await params;
  return (
    <div className='container mx-auto p-4 border rounded-lg shadow-md w-96'>
        <h1>User ID: {id.id}</h1>
    </div>
  )
}

export default UserPage