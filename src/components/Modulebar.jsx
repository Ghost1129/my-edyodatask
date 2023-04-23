"use client"
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { selectActiveModule,setActiveModule } from '@/slices/ModuleSlice'

const Modulebar = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const activeModule = useSelector(selectActiveModule)
    const handleClick = (module) => {
        dispatch(setActiveModule(module))
        if(module === 'topic'){
            router.push('/modules/topic')
        }
        if(module === 'quiz'){
            router.push('/modules/quiz')
        }
        if(module === 'assignment'){
            router.push('/modules/assignment')
        }
    }

  return (
    <div className='flex flex-col  items-center h-screen w-[200px] bg-gray-200 text-black'>
        <ul className='flex flex-col gap-6 '>
            <li className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-300 ${activeModule==='topic'?'bg-slate-300':''}  `}
            onClick={()=>handleClick('topic')}
            >
                <Image src='/Icons/activeTopic.svg' width={30} height={30}/>
                <span>Python Loops</span>
            </li>
            <li className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-300 ${activeModule==='quiz'?'bg-slate-300':''}  `}
            onClick={()=>handleClick('quiz')}
            
            >
                <Image src='/Icons/activeModuleQuiz.svg' width={30} height={30}/>
                <span>Quiz-1: Data Types</span>
            </li>
            <li className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-300 ${activeModule==='assignment'?'bg-slate-300':''}  `}
            onClick={()=>handleClick('assignment')}
            
            >
                <Image src='/Icons/activeAssignment.svg' width={30} height={30}/>
                <span>Assignment-1: <br /> Operators | Loops </span>
            </li>
        </ul>
    </div>
  )
}

export default Modulebar