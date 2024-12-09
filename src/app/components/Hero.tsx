import React from "react";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-16 bg-[#FBEBB5]">
      {/* Left Section */}
      <div className="text-center md:text-left max-w-md space-y-6 md:ml-12 mt-8">
        <h1 className="text-4xl font-bold leading-tight">
          Rocket single <br className="hidden md:block" />
          <span className="mt-2 inline-block">Seater</span>
        </h1>

        <button className="inline-block px-6 py-2 mt-4 text-black font-semibold border-b-2 border-black hover:text-gray-700">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0">
        <Image
          src="/images/Rocket single seater 1.png"
          alt="Rocket single seater sofa"
          className="w-full h-100 max-w-full md:max-w-xl" 
          width={500}  // Example fixed width for larger screens
          height={400} // Example fixed height to maintain aspect ratio
        />
      </div>
    </section>
  );
};

export default Hero;
