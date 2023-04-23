
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Sidebar from "@/components/Sidebar";

export default function InstructorLayout({children}){
    return(
        <>
        <Navbar/>
        <Navbar2/>
        <div className="flex">
        <Sidebar/>
        <main className="">
        {children}
        </main>
        </div>
        
        </>
    )
}