const Contact = () => {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center mt-4 mb-4 bg-black w-full py-10 px-6">
        {/* Contact Box */}
        <div className="bg-[#140c1c] rounded-lg p-6 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] text-center">
          <h1 className="text-bg font-bold text-2xl md:text-3xl lg:text-[2.5rem]">
            Let's Work Together!
          </h1>
          <p className="text-gray-200 mt-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum aut voluptas laboriosam atque aperiam consectetur sit eos ea expedita dolor beatae accusamus corporis error voluptatem voluptatum in, ratione perspiciatis.
          </p>
        </div>
  
        {/* Additional Content Section */}
        <div className="flex flex-col items-center justify-center w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%]  rounded-lg p-6 text-center text-white">
          <h1 className="text-xl font-bold">Hello</h1>
          <h2 className="text-lg">GJJ</h2>
          <h3 className="text-md">HGGUJ</h3>
        </div>
      </div>
    );
  };
  
  export default Contact;
  