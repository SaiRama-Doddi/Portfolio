"use client"; // Ensures animations work in Next.js

import SectionHeading from "@/components/Helper/page";
import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="pt-16 pb-16 bg-[#050709]"
    >
      {/* Section Heading */}
      <SectionHeading>About Me</SectionHeading>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content - Fade Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="fade-left"
        >
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>

          <div className="mt-8">
            {/* Service List */}
            {["Frontend Development", "Backend Development", "Full Stack Development"].map(
              (skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 mb-6"
                >
                  <div className={`w-7 h-7 flex flex-col items-center justify-center 
                   ${index === 0 ? "bg-blue-800" : index === 1 ? "bg-red-800" : "bg-green-800"}`}>
                    <FaCheck className="text-white" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                    {skill}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Stats Content - Zoom In */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 zoom-in"
        >
          {/* Stats Blocks */}
          {[
            { img: "/images/customer.png", count: "10+", text: "Satisfied Customers" },
            { img: "/images/experience.png", count: aboutInfo.experience, text: "Experience" },
            { img: "/images/completed.png", count: aboutInfo.project, text: "Completed Projects" },
            { img: "/images/rocket.png", count: aboutInfo.website, text: "Websites" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mt-5"
            >
              <Image src={stat.img} alt="stat" width={80} height={80} />
              <h1 className="text-white font-bold text-1xl sm:text-2xl md:text-xl mt-2">
                {stat.count}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-xl text-gray-500">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
