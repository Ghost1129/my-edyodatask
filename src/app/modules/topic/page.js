import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-5 mt-10 mx-14 '>
      <span className='text-xl font-bold'>Python Loops</span>
      <p className='text-sm '>15 December 2021, Wednesday, 07:30 PM</p>
      <span className='font-semibold text-right cursor-pointer text-sky-500'>DAILY FEEDBACK</span>
      <div className='text-black'>
        <ul className='flex text-white '>
          <li className='z-10 flex items-center gap-3 py-3 font-bold text-black uppercase bg-white border border-b-0 cursor-pointer px-9 border-sky-600 border-b-white'>
            <Image src='/Icons/information-circle 1.svg' width={20} height={20} />
            Session Plan</li>
          <li className='flex items-center gap-3 py-3 font-bold uppercase border-b cursor-pointer border-sky-600 px-9'>
            <Image src='/Icons/activeTopic.svg' width={20} height={20} />
            Pre-watch videos</li>
          <li className='flex items-center gap-3 py-3 font-bold uppercase border-b cursor-pointer border-sky-600 px-9'>
            <Image src='/Icons/videocam.svg' width={20} height={20} />
            Session recording</li>
          <li className='flex items-center gap-3 py-3 font-bold uppercase border-b cursor-pointer border-sky-600 px-9'>
            <Image src='/Icons/document.svg' width={20} height={20} />
            References</li>
        </ul>
        <div className='flex flex-col gap-2 bg-white border border-t-0 p-7 border-sky-600'>
        <span className='text-xl font-semibold'>Session Plan</span>
        <span className='font-thin'>Live Session is about to start. Please stay tuned.</span>
        <button className='px-4 py-2 bg-gray-100 rounded-full max-w-max'>Join Live Session</button>
        <span className='mt-3 font-bold'>Sub-Topics</span>
        <ul className='p-5 list-decimal'>
          <li>Sorting and Indexing dataframe</li>
          <li>Filtering Dataframe</li>
          <li>Usage of Ioc and iloc functions</li>
        </ul>
        <span>Session Details</span>
        </div>
      </div>
    </div>
  )
}

export default page