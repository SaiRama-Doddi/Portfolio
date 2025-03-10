import { BaseInfo } from "@/Data/data"
import { FaDownload } from "react-icons/fa6"
import Image from "next/image"


const page = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative ">
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/*Text content */}
        <div>
            {/*---Name---*/}
           <h1 className="text-gray-300 text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold">I am {BaseInfo.name}</h1>

             {/*position*/}
           <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
            {BaseInfo.position}</h1>


              {/*Description*/}

            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">{BaseInfo.description}</p>

            {/*button*/}
             
             <button className="md:px-8 py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 
             cursor-pointer">
                <span>Download CV</span>
                <FaDownload/>
             </button>
            </div>
            {/*Image content */}
            <div className="mx-auto block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
                <Image
                src={BaseInfo.profilePic}
                alt="profile"
                width={330}
                height={330}
                />

            </div>

        </div>
        </div>
    
    </div>
  )
}

export default page
