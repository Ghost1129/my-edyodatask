import Modulebar from "@/components/Modulebar";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Sidebar from "@/components/Sidebar";
import { AiFillMessage } from "react-icons/ai";

export default function MouduleLayout({children}){
    return(
        <>
        <Navbar/>
        <Navbar2/>
        <div className="flex">
        <Sidebar/>
        <Modulebar/>
        <main className="relative">
        {children}
        </main>
        <div className='absolute flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full cursor-pointer bottom-10 right-8'>
        <AiFillMessage size={30}/>

      </div>
        </div>
        
        </>
    )
}