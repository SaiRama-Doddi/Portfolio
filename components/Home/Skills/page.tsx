"use client"; // Ensures animations work in Next.js

import SectionHeading from "@/components/Helper/page";
import { skillsData } from "@/Data/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>My Skills</SectionHeading>

      {/* Grid container with gap */}
      <div className="w-[85%] mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="bg-[#111827] p-6 hover:bg-blue-800 transition-all duration-300 cursor-pointer text-center w-full flex flex-col items-center justify-center rounded-lg"
            initial={{ opacity: 0, x: -100 }} // Start off-screen (left)
            whileInView={{ opacity: 1, x: 0 }} // Move in when visible
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each card
            viewport={{ once: true }} // Ensures animation only runs once
          >
            {/* Centered Image */}
            <Image
              src={skill.image}
              width={80}
              height={80}
              alt={skill.title}
              className="mt-4 mx-auto"
            />
            <h2 className="text-white mt-4">{skill.title}</h2>
            <div className="mt-4 text-white rounded-lg bg-black p-2 opacity-40">
              {skill.percent}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
