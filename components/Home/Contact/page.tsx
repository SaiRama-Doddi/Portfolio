"use client";

import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mx-4 my-4 bg-black w-full py-10 px-6">
      {/* Contact Box */}
      <div className="bg-[#140c1c] rounded-lg p-6 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] text-center">
      <h1 className="text-bg font-bold text-2xl md:text-3xl lg:text-[2.5rem]">
        {"Let's Work Together!"}
      </h1>


        <p className="text-gray-200 mt-3 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum aut voluptas laboriosam atque aperiam consectetur sit eos ea expedita dolor beatae accusamus corporis error voluptatem voluptatum in, ratione perspiciatis.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 mt-6">
          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 bg-[black] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 bg-[black] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          {/* Email & Phone Number */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[black] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-[black] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          {/* Dropdown */}
          <div>
            <select
              value={selectedOption}
              onChange={handleSelect}
              className="w-full p-3 bg-[black] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-white"
            >
              <option value="">Select a Service</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Full Stack Development">Full Stack Development</option>
            </select>
          </div>

          {/* Message Box */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-[black] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col items-center justify-center w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] rounded-lg p-6 text-center text-white space-y-4">
      
      {/* Phone Card */}
      <motion.div
        className="flex flex-row items-center gap-3 bg-[#1a1a2e] p-3 rounded-lg shadow-md w-[90%] sm:w-[80%] md:w-[70%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-green-700 w-10 h-10 flex items-center justify-center rounded-full">
          <FaPhone className="text-white text-md" />
        </div>
        <div className="text-left">
          <h1 className="text-base font-semibold">Phone</h1>
          <p className="text-gray-300 text-sm">+91 8500734632</p>
        </div>
      </motion.div>

      {/* Email Card */}
      <motion.div
        className="flex flex-row items-center gap-3 bg-[#1a1a2e] p-3 rounded-lg shadow-md w-[90%] sm:w-[80%] md:w-[70%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
          <FaEnvelope className="text-white text-md" />
        </div>
        <div className="text-left">
          <h1 className="text-base font-semibold">Email Address</h1>
          <p className="text-gray-300 text-sm">sairamadoddi@gmail.com</p>
        </div>
      </motion.div>

      {/* Address Card */}
      <motion.div
        className="flex flex-row items-center gap-3 bg-[#1a1a2e] p-3 rounded-lg shadow-md w-[90%] sm:w-[80%] md:w-[70%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="bg-red-700 w-10 h-10 flex items-center justify-center rounded-full">
          <FaMapMarkerAlt className="text-white text-md" />
        </div>
        <div className="text-left">
          <h1 className="text-base font-semibold">Address</h1>
          <p className="text-gray-300 text-sm">Vishakapatnam, India</p>
        </div>
      </motion.div>
      
    </div>
    </div>
  );
};

export default Contact;
