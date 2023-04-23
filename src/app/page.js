import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar2'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import {AiFillMessage} from 'react-icons/ai'
// import {image1} from '../Icons/clock-blue.svg'
// import {Imgg} from '../assets/Data-Analysis.png'

export default function Home() {
  return (
    <>
    <div className='fixed top-0 w-full'>
      {/* Top Nav */}
    <Navbar/>
    {/* Sub Nav */}
    <Navbar2/>
    {/* Side Menu */}
    <Sidebar/>
    </div>
    {/* Main Content */}
    <main className='relative flex flex-col gap-8 p-12 mt-24 ml-32 -z-10'>
      <h3 className='text-2xl font-bold'>Upcoming Certifications</h3>
      {/* Certifications */}
      <div className='flex items-center gap-6 px-10 py-2 text-black bg-white border max-w-max border-sky-600'>
        <div className=''>
        <Image src='/Icons/Data-Analysis.png' alt="Picture of the author" width={60} height={50} className='rounded-full ' />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-2 px-6 bg-gray-200 rounded-md'>
            <span>Certification</span>
            <hr className='w-[2px] h-[14px] my-auto bg-black' />
            <span>Attempt 1</span>
          </div>
          <p className='text-lg'>
            DATA ANALYSIS <br />
            CERTIFICATION
          </p>
          <div className='flex gap-2 px-6 rounded-full bg-sky-300'>
            <span>COMPLETED</span>
            <hr className='w-[2px] h-[14px] my-auto bg-black' />
            <span>21 MAR 2022</span>
          </div>
        </div>
        {/* Exam Structure */}
        <div className='flex flex-col gap-3 mx-10'>
          <span className='font-bold '>Exam Structure</span>
          <div className='flex items-center gap-3'>
            <span>Round 1</span>
            <span className='px-2 py-1 bg-gray-200 rounded-full'>MCQS</span>
            <span className='px-2 py-1 bg-gray-200 rounded-full'>CODING</span>
          </div>
          <div className='flex items-center gap-3'>
            <span>Round 2</span>
            <span className='px-2 py-1 bg-gray-200 rounded-full'>PROJECT</span>
          </div>
        </div>
        <button className='px-2 py-1 uppercase bg-white border rounded-full cursor-pointer border-sky-500 text-sky-500'>View EXAM Details</button>
      </div>
      <h3 className='text-2xl font-bold'>Continue Learning</h3>
      <div className='flex'>
        {/* Moudule Details */}
        <div className='p-8 text-black bg-white border border-sky-600'>
          {/* Upper */}
          <div className='flex items-center gap-6 mb-2'>
            <div>
              <Image src='/Icons/Data Wrangling.png' alt="Picture of the author" width={60} height={50} className='rounded-full ' />
            </div>
            <div>
              <p className='text-lg'>Data Wrangling & <br />VISULAIZATION</p>
              <div className='flex items-center'>
                <div className='w-8 h-8 bg-yellow-300 rounded-full'></div>
                <span className='text-sky-600'>Test Instructor</span>
              </div>
            </div>
          </div>
          {/* Lower */}
          <div className='px-6'>
            <div className='flex items-center gap-2'>
              <span className='text-xs'>Live Sessions</span>
              <div>
                <span className='text-xs'>0/12</span>
                <div className='h-2 w-[160px] rounded-full bg-sky-300'></div>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs'>Live Sessions</span>
              <div>
                <span className='text-xs'>0/12</span>
                <div className='h-2 w-[160px] rounded-full bg-sky-300'></div>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs'>Live Sessions</span>
              <div>
                <span className='text-xs'>0/12</span>
                <div className='h-2 w-[160px] rounded-full bg-sky-300'></div>
              </div>
            </div>
          </div>

        </div>
        {/* Middle */}
        <div className='relative flex flex-col gap-2 px-8 py-6 text-black bg-white border border-sky-500'>
          <span className='text-lg'>Todays Plan</span>
          <span className='text-xs'>21 March 2022</span>
          <p className='my-3 text-sky-600'>
            Data Transformation <br /> using Pandas 
          </p>
          <div className='flex items-center justify-between gap-10'>
            <span className='text-sm'>Daily Feedback</span>
            <span className='text-xs'>opens at 07:30 PM</span>
          </div>
          <div className='flex flex-col'>
            <button className='px-2 py-1 text-sm bg-gray-200 rounded-full max-w-max'>JOIN LIVE SESSION</button>
            <span className='pl-4 text-xs'>BEGINS AT 07:30 PM</span>
          </div>
          <span className='right-0 -top-[30px] absolute cursor-pointer text-sky-500'>VIEW MODULES DETAILS</span>
        </div>
        <div className='flex flex-col gap-4 px-8 py-6 ml-16 text-black bg-white border rounded border-sky-600'>
          <span>Progress Overview</span>
          <div className='relative flex justify-between w-full gap-10 px-3 py-4 border rounded-md border-sky-600'>
            <span>0%</span>
            <span>Overall Grade</span>
            <div className='absolute bottom-0 left-1 rounded-full w-[95%] h-2 bg-gray-400'></div>
          </div>
          <div className='relative flex justify-between w-full px-3 py-4 border rounded-md border-sky-600'>
            <span>0%</span>
            <span>Overall Grade</span>
            <div className='absolute bottom-0 left-1 rounded-full w-[95%] h-2 bg-gray-400'></div>
          </div>
          <span className='text-xs text-sky-500'>VIEW DETAILED OVERVIEW</span>
        </div>
      </div>
      <div className='absolute flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full cursor-pointer bottom-10 right-8'>
        <AiFillMessage size={30}/>

      </div>
    </main>
    </>
    
  )
}
