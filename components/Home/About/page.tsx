import SectionHeading from "@/components/Helper/page"
import { aboutInfo } from "@/Data/data"
import { FaCheck } from "react-icons/fa6"
import Image from "next/image"


const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]"  >
        {/* section heading */}
   <SectionHeading>About Me</SectionHeading>

   <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
    {/*text center */}
    <div className="">
     <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">{aboutInfo.title}</h1>
      <p className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>
       <div className="mt-8">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
             <FaCheck className="text-white" />
             </div>
             <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">Frontend Development</p>
           </div>

           <div className="flex items-center space-x-2 mb-6">
            <div className="w-7 h-7 bg-red-800 flex flex-col items-center justify-center">
             <FaCheck className="text-white" />
             </div>
             <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">Backend Development</p>
           </div>

           <div className="flex items-center space-x-2 mb-6">
            <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
             <FaCheck className="text-white" />
             </div>
             <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">Full StackDevelopment</p>
           </div>
           </div> 
       </div>
    {/* stats content*/}
    <div className="grid grid-cols-2">
        {/* Customer Count Section */}
         <div className="flex  flex-col items-center space-x-4">
            {/* Customer Icon */}
            <Image
            src="/images/customer.png"
            alt="customer"
            width={80} 
            height={80}
           className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4"
           />

            {/* Customer Info */}

           <h1 className="text-white font-bold text-1xl sm:text-2xl md:text-xl">10+</h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-xl text-gray-500">
            Satisfied Customers
          </p>
       </div>
      

            {/* Customer Count2 Section */}
       <div className="flex  flex-col items-center space-x-4">
            {/* Customer Icon */}
            <Image
            src="/images/experience.png"
            alt="customer"
            width={80} 
            height={80}
           className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4"
           />

            {/* Customer Info */}

           <h1 className="text-white font-bold text-1xl sm:text-2xl md:text-xl">{aboutInfo.experience}</h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-xl text-gray-500">
           Experience
          </p>
       </div>


       
            {/* Customer Count3 Section */}
            <div className="flex  flex-col items-center space-x-4 mt-15">
            {/* Customer Icon */}
            <Image
            src="/images/completed.png"
            alt="customer"
            width={80} 
            height={80}
           className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4"
           />

            {/* Customer Info */}

           <h1 className="text-white font-bold text-1xl sm:text-2xl md:text-xl">{aboutInfo.project}</h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-xl text-gray-500">
            Completed Projects
          </p>
       </div>


       {/* Customer Count4 Section */}
       <div className="flex  flex-col items-center space-x-4 mt-15">
            {/* Customer Icon */}
            <Image
            src="/images/rocket.png"
            alt="customer"
            width={80} 
            height={80}
           className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4"
           />

            {/* Customer Info */}

           <h1 className="text-white font-bold text-1xl sm:text-2xl md:text-xl">{aboutInfo.website}</h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-xl text-gray-500">
            Websites
          </p>
       </div>
  </div>


    

   </div>

     
    </div>
  )
}

export default About