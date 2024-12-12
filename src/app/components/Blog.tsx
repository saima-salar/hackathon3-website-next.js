// import React from 'react'
// import Image from "next/image";
// import { MdOutlineWatchLater } from "react-icons/md";
// import { CiCalendar } from "react-icons/ci";

// const Blogs = () => {
//   return (
//     <main className='bg-[#FFFFFF] w-1440 h-944 '>
    
//  <h2 className='flex justify-center text-[50px] font-bold h-24 transition-transform duration-300 hover:scale-125 ease-in-out '>Our Blogs</h2>
//  <p className='text-[#9F9F9F] last:flex justify-center text-[12px] mb-6 '> Find a bright ideal to suit your taste with our great selection.</p>


//     <section className=" bg-[#FFFFFF] h-944 p-5 flex gap-5 justify-between mx-auto ">
//     <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
//       <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//         <Image
//           src="/images/blog/Rectangle 13.png"
//           alt="black shirt"
//           width={250}
//           height={250}
//           className="object-cover"
//         />
//       </div>
//       <h5 className="font-normal text-[14px] mt-2">Going all-in with millennial design <br />
// <p className="mt-2 ml-12  text-black font-semibold border-b-2 border-black hover:text-gray-700 w-max">Read More</p> <br /> 
// <span className='text-[#000000] flex flex-row justify-center'><MdOutlineWatchLater />5 min
// <CiCalendar />12th Oct 2022</span></h5>
     
//     </div>

//     <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
//       <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//         <Image
//           src="/images/blog/Rectangle 14.png"
//           alt="lining shirt"
//           width={250}
//           height={250}
//           className="object-cover"
//         />
//       </div>
//       <h5 className="font-normal text-[14px] mt-2">Going all-in with millennial design <br />
// <p className="mt-2 ml-12  text-black font-semibold border-b-2 border-black hover:text-gray-700 w-max">Read More</p> <br /> 
// <span className='text-[#000000] flex flex-row justify-center'><MdOutlineWatchLater />5 min<CiCalendar />12th Oct 2022</span></h5>
     
//     </div>


//     <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg">
//       <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//         <Image
//           src="/images/blog/Rectangle 15.png"
//           alt="lining shirt"
//           width={250}
//           height={250}
//           className="object-cover"
//         />
//       </div>
//       <h5 className="font-normal text-[14px] mt-2">Going all-in with millennial design <br />
// <p className="mt-2 ml-12  text-black font-semibold border-b-2 border-black hover:text-gray-700 w-max">Read More</p> <br /> 
// <span className='text-[#000000] flex flex-row justify-center'><MdOutlineWatchLater />5 min
// <CiCalendar />12th Oct 2022</span></h5>
    
//     </div>
    
//   </section>
//   <div className="flex justify-center">
//       <button className="text-center px-6 py-5 mt-2 text-black font-semibold border-b-2 border-black hover:text-gray-700 transition-transform duration-300 hover:scale-125 ease-in-out">
//       View All Post
//       </button>
//     </div>

//   </main>
//   )
// }

// export default Blogs


import React from 'react';
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

const Blogs = () => {
  return (
    <main className="bg-[#FFFFFF] w-1440 h-944">
      {/* Main Heading */}
      <h2 className="text-center text-[50px] font-bold h-24 transition-transform duration-300 hover:scale-125 ease-in-out">
        Our Blogs
      </h2>
      <p className="text-center text-[#9F9F9F] text-[12px] mb-6">
        Find a bright ideal to suit your taste with our great selection.
      </p>

      {/* Blog Cards */}
      <section className="bg-[#FFFFFF] h-944 p-5 flex gap-5 justify-between mx-auto">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] h-auto flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg"
          >
            {/* Blog Image */}
            <div className="overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src={`/images/blog/Rectangle 1${3 + index}.png`}
                alt="blog image"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            {/* Blog Content */}
            <h5 className="font-normal text-[14px] mt-2 text-center">
              Going all-in with millennial design
            </h5>
            <p className="mt-2 text-black font-semibold border-b-2 border-black hover:text-gray-700 w-max mx-auto">
              Read More
            </p>
            <span className="text-[#000000] flex flex-row justify-center items-center gap-2 mt-2">
              <MdOutlineWatchLater /> 5 min <CiCalendar /> 12th Oct 2022
            </span>
          </div>
        ))}
      </section>

      {/* View All Posts Button */}
      <div className="flex justify-center">
        <button className="text-center px-6 py-5 mt-2 text-black font-semibold border-b-2 border-black hover:text-gray-700 transition-transform duration-300 hover:scale-125 ease-in-out">
          View All Posts
        </button>
      </div>
    </main>
  );
};

export default Blogs;
