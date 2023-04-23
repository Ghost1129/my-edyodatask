"use client"
import React from 'react'
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'

const Navbar2 = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className='sticky z-30 flex flex-col gap-3 px-10 py-3 bg-blue-900 cursor-pointer' onClick={() => setOpen(!open)}>
      <div className='flex items-center p-2' >
        <span>DS031221</span>
        {open ? <AiFillCaretUp size={20}/> : <AiFillCaretDown size={20} />}
        <span className='ml-5 text-lg font-extrabold'>Data Scientist Program</span>
      </div>
      
      {open && <div className='flex flex-col gap-3'>
        <span className='p-2'>Select Program</span>
        <div className='flex gap-8 '>
          <span className='p-2 cursor-pointer hover:bg-white hover:text-black'>ECRD</span>
          <span className='p-2 cursor-pointer hover:bg-white hover:text-black'>FSR222222</span>
          <span className='p-2 cursor-pointer hover:bg-white hover:text-black'>DS261121</span>
          <span className='p-2 cursor-pointer hover:bg-white hover:text-black'>DS031221</span>
        </div>
      </div>}
    </div>
  )
}

export default Navbar2