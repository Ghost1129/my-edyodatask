import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-6 px-20 py-12'>
        <div className='flex justify-between'>
        <div className='flex flex-col'>
            <span className='text-xl font-semibold'>Assignment-1: Operators | Loops</span>
            <span className='mt-4 text-sm'>20 December 2021</span>
        </div>
        <div className='flex gap-4'>
        <span className='flex flex-col'>
                <span className='text-lg font-bold text-right'>1</span>
                <span className='text-sm font-thin'>Problems</span>
            </span>
            <span className='flex flex-col'>
                <span className='text-lg font-bold text-right'>100</span>
                <span className='text-sm font-thin'>Total Score</span>
            </span>
        </div>
        </div>
        <span>Assignment Details</span>
        <div className='flex items-center gap-24 px-16 py-8 text-black bg-white border rounded border-sky-600'>
            <span className='flex flex-col'>
                <span className='text-xl font-bold'>1</span>
                <span className='font-thin'>Problems</span>
            </span>
            <span className='flex flex-col'>
                <span className='text-xl font-bold'>100</span>
                <span className='font-thin'>Total Score</span>
            </span>
            <div className='w-[1px] h-[100px] bg-black'></div>
            <div className='flex flex-col gap-3 '> 
                <span>Start:</span>
                <ul>
                    <li className='flex items-center gap-3 mb-3 text-sm'>
                        <Image src='/Icons/calendar.svg' width={20} height={20} />
                        20 December 2021</li>
                    <li className='flex items-center gap-3 text-sm'>
                        <Image src='/Icons/clock-blue.svg' width={20} height={20} />
                        07:30 PM</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3 '> 
                <span>Due:</span>
                <ul>
                    <li className='flex items-center gap-3 mb-3 text-sm'>
                    <Image src='/Icons/calendar.svg' width={20} height={20} />
                        26 December 2021</li>
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