import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-6 px-20 py-12'>
        <div className='flex'>
        <div className='flex flex-col'>
            <span className='text-xl font-semibold'>Quiz-1: Data Types</span>
            <span className='mt-4 text-sm'>16 December 2021,Thrusday</span>
        </div>
        </div>
        <span className='font-semibold'>Quiz Details</span>
        <div className='flex items-center gap-16 px-16 py-8 text-black bg-white border rounded border-sky-600'>
            <span className='flex flex-col'>
                <span className='text-xl font-bold'>1</span>
                <span className='font-thin'>Questions</span>
            </span>
            <span className='flex flex-col'>
                <span className='text-xl font-bold'>-</span>
                <span className='font-thin'>Duration</span>
            </span>
            <span className='flex flex-col'>
                <span className='text-xl font-bold'>125</span>
                <span className='font-thin'>Total Score</span>
            </span>
            <div className='w-[1px] h-[100px] bg-black'></div>
            <div className='flex flex-col gap-3 '> 
                <span>Start:</span>
                <ul className='min-w-max'>
                    <li className='flex items-center gap-3 mb-3 text-sm'>
                        <Image src='/Icons/calendar.svg' width={20} height={20} />
                        16 December 2021</li>
                    <li className='flex items-center gap-3 text-sm'>
                        <Image src='/Icons/clock-blue.svg' width={20} height={20} />
                        07:30 PM</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3 '> 
                <span>Due:</span>
                <ul className='min-w-max'>
                    <li className='flex items-center gap-3 mb-3 text-sm'>
                    <Image src='/Icons/calendar.svg' width={20} height={20} />
                        19 December 2021</li>
                    <li className='flex items-center gap-3 text-sm'>
                    <Image src='/Icons/clock-blue.svg' width={20} height={20} />
                        11:59 PM</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default page