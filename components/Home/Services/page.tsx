"use client";
import SectionHeading from "@/components/Helper/page";
import { servicesData } from "@/Data/data";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#050709] py-20 min-h-[80vh] flex flex-col justify-center"
    >
      <SectionHeading>Services</SectionHeading>

      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {servicesData.map((service) => (
          <Tilt key={service.id} className="w-full mx-auto shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.id * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#34a0a4] p-8 shadow-lg rounded-lg min-h-[250px] h-full flex flex-col items-center text-center"
            >
              {/* Service Icon */}
              <Image src={service.icon} alt={service.title} width={80} height={80} />

              {/* Service Title */}
              <h2 className="text-xl font-semibold mt-4">{service.title}</h2>

              {/* Service Description */}
              <p className="text-sm text-black-200 mt-2">{service.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
