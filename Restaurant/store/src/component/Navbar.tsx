import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='h-12 flex text-red-500 p-4 items-center justify-between border-b-2 border-red-500 uppercase'>
      <div className='text-xl'>
        Massimo
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar 