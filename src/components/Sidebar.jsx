"use client"
import React from 'react'
import {FaHome,FaUser} from 'react-icons/fa'
import {TbBooks}  from 'react-icons/tb'
import { selectActivePage, setActivePage } from '@/slices/HomeSlice'
import { useDispatch, useSelector } from 'react-redux'
import {ActivePage} from '@/slices/HomeSlice'
import { useRouter } from 'next/navigation'


const Sidebar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const activePage = useSelector(selectActivePage)
  const handleClick = (page) => {
    dispatch(setActivePage(page))
    console.log(page)
    if(page === 'home'){
      router.push('/')
    }
    if(page === 'module'){
      router.push('/modules/topic')
    }
    if(page === 'instructor'){
      router.push('/instructors')
    }
  }
  return (
    <div className='flex flex-col items-center h-screen w-[100px] bg-blue-800'>
        <div className={`flex flex-col items-center w-full cursor-pointer p-4 hover:bg-white hover:text-black ${activePage==='home'?'bg-white text-black':''} `}
        onClick={()=>handleClick('home')}
        >
            <FaHome size={30}/>
            <span>Home</span>
        </div>
        <div className={`flex flex-col items-center cursor-pointer w-full p-4 hover:bg-white hover:text-black ${activePage==='module'?'bg-white text-black':''}`}
        onClick={()=>handleClick('module')}
        >
        <TbBooks size={30}/>
            <span>Modules</span>
        </div>
        <div className={`flex flex-col items-center cursor-pointer w-full p-4 hover:bg-white hover:text-black ${activePage==='instructor'?'bg-white text-black':''}`}
         onClick={()=>handleClick('instructor')}>
        <FaUser size={30}/>
            <span>Instructors</span>
        </div>
    </div>
  )
}

export default Sidebar