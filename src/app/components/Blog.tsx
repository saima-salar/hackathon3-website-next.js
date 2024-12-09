import React from 'react'
import Image from "next/image";

const Blogs = () => {
  return (
    <main className='bg-[#FFFFFF]'>
    
 <h2 className='flex justify-center text-[50px] font-bold h-24 transition-transform duration-300 hover:scale-125 ease-in-out '>Our Blogs</h2>
 <p className='flex justify-center text-[12px] mb-6 '> Find a bright ideal to suit your taste with our great selection.</p>


    <section className=" bg-[#FFFFFF] h-944 p-5 flex gap-5 justify-between mx-auto ">
    <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
      <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src="/images/blog/Rectangle 13.png"
          alt="black shirt"
          width={250}
          height={250}
          className="object-cover"
        />
      </div>
      <h5 className="font-bold mt-2">Side table</h5>
      <p>
      View More
      </p>
    </div>

    <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
      <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src="/images/blog/Rectangle 14.png"
          alt="lining shirt"
          width={250}
          height={250}
          className="object-cover"
        />
      </div>
      <h5 className="font-bold mt-2">Side table</h5>
      <p>
      View More
      </p>
    </div>


    <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
      <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src="/images/blog/Rectangle 15.png"
          alt="lining shirt"
          width={250}
          height={250}
          className="object-cover"
        />
      </div>
      <h5 className="font-bold mt-2">Side table</h5>
      <p>
      View More
      </p>
    </div>
    
  </section>
  <div className="flex justify-center">
      <button className="text-center px-6 py-5 mt-2 text-black font-semibold border-b-2 border-black hover:text-gray-700 transition-transform duration-300 hover:scale-125 ease-in-out">
        View More
      </button>
    </div>

  </main>
  )
}

export default Blogs