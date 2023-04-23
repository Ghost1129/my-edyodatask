import Image from 'next/image'
import React from 'react'
// import {Logo} from '../Icons/Data-Analysis.svg'


const Navbar = () => {
 
  return (
    <nav >
        <div className="sticky flex items-center justify-between w-full px-12 py-2 text-black bg-white">
            <a href="#" className="text-3xl font-extrabold">EDYODA</a>
            <div id="nav-mobile" className="flex gap-3">
                <span>Hi Test Learner!</span>
                <span>User</span>
            </div>
        </div>

    </nav>
  )
}

export default Navbar