import React from 'react'
import Link from 'next/link';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';
import { BiSliderAlt } from "react-icons/bi";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";

const page = () => {
  return (
 <main className='w-1440'>
    <nav className="flex justify-between items-center px-10 py-4 bg-[#FFFFFF] drop-shadow-lg">
    <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">   <Image 
        src="/images/contact/logo.png" 
        alt="image" 
        width={40} 
        height={40} 
      /></div>
    <ul className="flex space-x-6 text-[14px] text-[#000000]">
      <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/" >Home</Link></li>
      <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/store">Shop</Link></li>
      <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/about">About</Link></li>
      <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/contact">Contact</Link></li>
    </ul>


    <div className="flex space-x-4">
      <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
      <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
      <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
      <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
   
    </div>
  </nav>

  <section
  className="relative w-1440 h-316  bg-cover bg-center flex flex-col justify-center items-center"
  style={{
    backgroundImage: "url('/images/second-page/Rectangle 1.png')",
  }}
>
  <div className="absolute inset-0 bg-black opacity-30"></div>

  <div className="z-10 text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop</h1>
    <div className="p-4 text-white bg-opacity-50">
      <Link href="/">Home</Link> &gt; <span>Shop</span>
    </div>
  </div>
</section>
<section className='w-1440 h-100'>
    <div className="flex items-center justify-between p-4 bg-[#FAF4F4] border border-gray-200 rounded-lg">
      {/* Left Side: Filter and View */}
      <div className="flex items-center gap-4">
        <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 ">
        <BiSliderAlt /><span className="mr-2"></span> Filter 
        </button>
        <div className="flex items-center gap-2">
       
          <HiViewGrid /><BsViewList />
      
        </div>
      </div>

      {/* Center: Showing results */}
      <div className="text-sm text-gray-600">
        Showing <span className="font-medium">1-16</span> of <span className="font-medium">32</span> results
      </div>

      {/* Right Side: Show and Sort */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">Show</span>
          <input
            type="number"
            defaultValue="16"
            className="w-16 p-1 text-sm text-center border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
          />
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">Sort by</span>
          <select
            className="p-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
          >
            <option>Default</option>
            <option>Price</option>
            <option>Popularity</option>
          </select>
        </div>
      </div>
    </div>

    </section>


<section className="grid grid-cols-4 gap-6 px-4 py-8">
  {[
    { src: "/images/second-page/Trenton modular sofa_3 1.png", alt: "Product 1", name: "Product 1", price: "Rs. 24,000.00" },
    { src: "/images/second-page/Granite dining table with dining chair 1.png", alt: "Product 2", name: "Product 2", price: "Rs. 32,000.00" },
    { src: "/images/second-page/Outdoor bar table and stool 1.png", alt: "Product 3", name: "Product 3", price: "Rs. 18,000.00" },
    { src: "/images/second-page/Plain console with teak mirror 1.png", alt: "Product 4", name: "Product 4", price: "Rs. 15,000.00" },
    { src: "/images/second-page/Grain coffee table 1.png", alt: "Product 5", name: "Product 5", price: "Rs. 40,000.00" },
    { src: "/images/second-page/Kent coffee table 1.png", alt: "Product 6", name: "Product 6", price: "Rs. 22,000.00" },
    { src: "/images/second-page/Round coffee table_color 2 1.png", alt: "Product 7", name: "Product 7", price: "Rs. 35,000.00" },
    { src: "/images/second-page/Reclaimed teak coffee table 1.png", alt: "Product 8", name: "Product 8", price: "Rs. 28,000.00" },
    { src: "/images/second-page/Plain console_ 1.png", alt: "Product 9", name: "Product 9", price: "Rs. 26,000.00" },
    { src: "/images/second-page/Reclaimed teak Sideboard 1.png", alt: "Product 10", name: "Product 10", price: "Rs. 20,000.00" },
    { src: "/images/second-page/SJP_0825  1.png", alt: "Product 11", name: "Product 11", price: "Rs. 30,000.00" },
    { src: "/images/second-page/Bella chair and table 1.png", alt: "Product 12", name: "Product 12", price: "Rs. 50,000.00" },
    { src: "/images/second-page/Granite square side table 2.png", alt: "Product 13", name: "Product 13", price: "Rs. 45,000.00" },
    { src: "/images/second-page/Asgaard sofa 1.png", alt: "Product 14", name: "Product 14", price: "Rs. 37,000.00" },
    { src: "/images/second-page/Maya sofa three seater 1.png", alt: "Product 15", name: "Product 15", price: "Rs. 42,000.00" },
    { src: "/images/second-page/Outdoor sofa set 1.png", alt: "Product 16", name: "Product 16", price: "Rs. 25,000.00" },
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-between text-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg h-full"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={250}
        height={250}
        className="object-cover rounded-md"
      />
      <div className="mt-4">
        <p className="font-medium">{item.name}</p>
        <p className="text-lg font-bold text-gray-800 mt-2">{item.price}</p>
      </div>
    </div>
  ))}
</section>
    
    <div className=" bg-[#FFFFFF] h-100px flex flex-col items-center justify-center  p-6">
  
      {/* Pagination Buttons */}
      <div className="flex items-center space-x-2">
      
        {/* Page Numbers */}
        <button className="px-4 py-2 rounded bg-[#FBEBB5] text-[#000000]">
          1
        </button>
        <button className="px-4 py-2 rounded bg-[#FFF9E5] hover:bg-[#FBEBB5]">
          2
        </button>
        <button className="px-4 py-2 rounded bg-[#FFF9E5] hover:bg-[#FBEBB5]">
          3
        </button>

        {/* Next Button */}
        <button className="px-4 py-2 rounded bg-[#FFF9E5] hover:bg-[#FBEBB5]">
          Next
        </button>
      </div>
    </div>

<section className="bg-[#FAF4F4]  py-8 flex justify-evenly items-center w-full">
  <div className="text-left">
    <h3 className="text-xl font-semibold">Free Delivery</h3>
    <p className="text-xs text-[#9F9F9F]">For all orders over $50, consectetur <br /> adipim scing elit.</p>
  </div>
  <div className="text-left">
    <h3 className="text-xl font-semibold">90 Days Return</h3>
    <p className="text-xs text-[#9F9F9F]">If goods have problems, consectetur <br /> adipim scing elit.</p>
  </div>
  <div className="text-left">
    <h3 className="text-xl font-semibold">Secure Payment</h3>
    <p className="text-xs text-[#9F9F9F]">100% secure payment, consectetur <br /> adipim scing elit.</p>
  </div>
</section>

<footer className="bg-[#FFFFFF] py-8">
      <div className="container mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
         
          <p className="font-normal mb-2 mt-8 text-[#9F9F9F]  text-[15px]">480 University Drive Suite 200 Coral Gables, 33134 USA</p>
        </div>

        {/* Links Section */}
        <div>
          <h5 className="font-bold mb-2 text-[#9F9F9F]  text-[15px]">Links</h5>
          <ul className="space-y-2">
            <li className="hover:text-gray-700 transition-colors text-left">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-700 transition-colors text-left">
              <a href="#">Shop</a>
            </li>
            <li className="hover:text-gray-700 transition-colors text-left">
              <a href="#">About</a>
            </li>
            <li className="hover:text-gray-700 transition-colors text-left">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h5 className="font-bold mb-2 text-[#9F9F9F]   text-[15px]">Help</h5>
          <ul className="space-y-2">
            <li className="hover:text-gray-700 transition-colors">
              <a href="#">Payment Options</a>
            </li>
            <li className="hover:text-gray-700 transition-colors">
              <a href="#">Returns</a>
            </li>
            <li className="hover:text-gray-700 transition-colors">
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </div>

    {/* Newsletter Section */}
    <div className="flex flex-col items-center md:items-start">
      <h5 className="font-bold mb-2 text-[#9F9F9F] text-[15px]">Newsletter</h5>
      <div className="flex w-full md:w-auto items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email address"
          className="text-[#9F9F9F] flex-grow px-2 py-2 w-full border-b-2 border-black md:w-auto focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="text-black font-bold px-4 py-2 border-b-2 border-black hover:bg-gray-800 hover:text-white transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</footer>

          </main>
      );
    }
    

export default page


