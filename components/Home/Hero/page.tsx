"use client"; 

import { BaseInfo } from "@/Data/data";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text content */}
          <div>
            {/*---Name (Fade Left)---*/}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold"
            >
              I am {BaseInfo.name}
            </motion.h1>

            {/* Position (Fade Right) */}
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {BaseInfo.position}
            </motion.h1>

            {/* Description (Fade Left) */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {BaseInfo.description}
            </motion.p>

            {/* Button (Zoom In) */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:px-8 py-2.5 px-6 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
            >
           <a href="/D.Rama-Resume.pdf" download>
            <span>Download CV</span>
            </a>

              <FaDownload />
            </motion.button>
          </div>

          {/* Image Content (Zoom In) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden"
          >
            <Image src={BaseInfo.profilePic} alt="profile" width={350} height={350} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
