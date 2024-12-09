import React from 'react'
import Link from 'next/link';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';

const page = () => {
  return (
 <main>
    <nav className="flex justify-between items-center px-10 py-4 bg-[#FFFFFF] drop-shadow-lg">
    <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">Logo</div>
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
  className="relative w-full h-[80vh] bg-cover bg-center flex flex-col justify-center items-center"
  style={{
    backgroundImage: "url('/images/second-page/Rectangle 1.png')",
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="z-10 text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop</h1>
    <div className="p-4 text-white bg-opacity-50">
      <Link href="/">Home</Link> &gt; <span>Shop</span>
    </div>
  </div>
</section>

<section className="h-auto p-5 flex gap-5 justify-between mx-auto">
      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
         {/* 1 */}
          <Image
            src="/images/second-page/Trenton modular sofa_3 1.png"
            alt="Trenton modular sofa"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Trenton modular sofa_3</p>
        <p>
          <b className="transition-transform duration-300 hover:scale-125 ease-in-out ">Rs. 25,000.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
        {/* 2 */}
          <Image
            src="/images/second-page/Granite dining table with dining chair 1.png"
            alt="Granite dining table with dining chair"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Granite dining table with dining chair</p>
        <p>
          <b >Rs. 25,000.00</b>
        </p>

       
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div >
         {/* 3 */}
          <Image
            src="/images/second-page/Outdoor bar table and stool 1.png"
            alt="Outdoor bar table and stool"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Outdoor bar table and stool</p>
        <p>
          <b >Rs. 25,000.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div>
        {/* 4 */}
          <Image
            src="/images/second-page/Plain console with teak mirror 1.png"
            alt="Plain console with teak mirror"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Plain console with teak mirror</p>
        <p>
          <b >Rs. 25,000.00</b>
        </p>

       
      </div>
    </section>
    
    <section className="h-auto p-5 flex gap-5 justify-between mx-auto">
<div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
<div >
          {/* 5 */}
          <Image
            src="/images/second-page/Grain coffee table 1.png"
            alt="Grain coffee table"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <br /><br />
        <p className="font-normal mt-2">Grain coffee table</p>
        <p>
          <b className="transition-transform duration-300 hover:scale-125 ease-in-out ">Rs. 15,000.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
         {/* 6 */}
          <Image
            src="/images/second-page/Kent coffee table 1.png"
            alt="Kent coffee table"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Kent coffee table</p>
        <p>
          <b >Rs. 225,000.00</b>
        </p>

       
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div >
         {/* 7 */}
          <Image
            src="/images/second-page/Round coffee table_color 2 1.png"
            alt="Round coffee table_color"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Round coffee table_color 2</p>
        <p>
          <b >Rs. 251,000.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
          {/* 8 */}
          <Image
            src="/images/second-page/Reclaimed teak coffee table 1.png"
            alt="Reclaimed teak coffee table"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Reclaimed teak coffee table</p>
        <p>
          <b >Rs. 25,200.00</b>
        </p>

       
      </div>
    </section>

    <section className="p-5 flex gap-5 justify-between mx-auto">
<div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
<div >
         {/* 9 */}
          <Image
            src="/images/second-page/Plain console_ 1.png"
            alt="Plain console"
            width={350}
            height={450}
            className="object-cover"
          />
        </div>
        <br /> <br /> <br /> <br />
        <p className="font-normal mt-2">Plain console_</p>
        <p>
          <b className="transition-transform duration-300 hover:scale-125 ease-in-out ">Rs. 258,200.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
          {/* 10 */}
          <Image
            src="/images/second-page/Reclaimed teak Sideboard 1.png"
            alt="Reclaimed teak Sideboard"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Reclaimed teak Sideboard</p>
        <p>
          <b >Rs. 20,000.00</b>
        </p>

       
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
          {/* 11 */}
          <Image
            src="/images/second-page/SJP_0825  1.png"
            alt="SJP_0825"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">SJP_0825 </p>
        <p>
          <b >Rs. 200,000.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
         {/* 12 */}
          <Image
            src="/images/second-page/Bella chair and table 1.png"
            alt="Bella chair and table"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Bella chair and table</p>
        <p>
          <b >Rs. 100,000.00</b>
        </p>

       
      </div>
    </section>

    
<section className=" bg-[#FFFFFF] h-auto p-5 flex gap-5 justify-between mx-auto">
<div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
<div >
         {/* 13 */}
          <Image
            src="/images/second-page/Granite square side table 2.png"
            alt="Granite square side table"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Granite square side table</p>
        <p>
          <b className="transition-transform duration-300 hover:scale-125 ease-in-out ">Rs. 258,800.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
         {/* 14 */}
          <Image
            src="/images/second-page/Asgaard sofa 1.png"
            alt="Asgaard sofa"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Asgaard sofa</p>
        <p>
          <b >Rs. 250,000.00</b>
        </p>

       
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div >
         {/* 15 */}
          <Image
            src="/images/second-page/Maya sofa three seater 1.png"
            alt="Maya sofa three seater"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Maya sofa three seater</p>
        <p>
          <b >Rs. 115,000.00</b>
        </p>

        
      </div>

      <div className="bg-[#FFFFFF] h-auto flex flex-col w-full sm:w-1/2 lg:w-1/4 p-3 shadow-lg rounded-lg overflow-hidden rounded-t-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div >
         {/* 16 */}
          <Image
            src="/images/second-page/Outdoor sofa set 1.png"
            alt="Outdoor sofa set"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
        <p className="font-normal mt-2">Outdoor sofa set</p>
        <p>
          <b >Rs. 244,000.00</b>
        </p>

       
      </div>
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

    <section className="bg-[#FAF4F4] py-8 flex justify-between items-center px-9">
  <div className="text-center">
    <h3 className="text-xl font-semibold">Free Delivery</h3>
    <p className="text-xs text-[#9F9F9F]">For all orders over $50, consectetur <br /> adipim scing elit.</p>
  </div>
  <div className="text-center">
    <h3 className="text-xl font-semibold">90 Days Return</h3>
    <p className="text-xs text-[#9F9F9F]">If goods have problems, consectetur <br /> adipim scing elit.</p>
  </div>
  <div className="text-center ">
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
            <li className="hover:text-gray-700 transition-colors">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-700 transition-colors">
              <a href="#">Shop</a>
            </li>
            <li className="hover:text-gray-700 transition-colors">
              <a href="#">About</a>
            </li>
            <li className="hover:text-gray-700 transition-colors">
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
        <div>
          <h5 className="font-bold mb-2 text-[#9F9F9F]   text-[15px]">Newsletter</h5>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-center text-gray-500 text-sm">
      ecommorce © Made by <b className="text-black">Saima Salar</b>, Figma Designed by <b className="text-black">Meubel House</b>
      </div>
    </footer>
          </main>
      );
    }
    

export default page


