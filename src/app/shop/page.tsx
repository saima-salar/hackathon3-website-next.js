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
import Footer from "../components/Footer";
import FooterScale from "../components/FooterScale";

const page = () => {
  return (
    <main className="w-full">
      <nav className="h-auto flex justify-between items-center px-6 py-4 bg-white drop-shadow-lg">
        <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-110 ease-in-out">
          <Image 
            src="/images/contact/logo.png" 
            alt="Logo" 
            width={40} 
            height={40} 
          />
        </div>
        <ul className="flex space-x-4 text-sm text-black md:text-base">
          <li className="transition-transform duration-300 hover:scale-110 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-110 ease-in-out">
            <Link href="/store">Shop</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-110 ease-in-out">
            <Link href="/about">About</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-110 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link href="/account">
            <FaRegUser className="text-black text-lg transition-transform duration-300 hover:scale-110 ease-in-out cursor-pointer" />
          </Link>
          <IoSearch className="text-black text-lg transition-transform duration-300 hover:scale-110 ease-in-out" />
          <FaRegHeart className="text-black text-lg transition-transform duration-300 hover:scale-110 hover:text-red-700 ease-in-out" />
          <MdOutlineShoppingCart className="text-black text-lg transition-transform duration-300 hover:scale-110 ease-in-out" />
        </div>
      </nav> 

      <section
        className="relative w-full h-80 bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/images/second-page/Rectangle 1.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="z-10 text-center flex flex-col justify-center items-center text-[#000000]">
          <Image 
            src="/images/contact/logo.png" 
            alt="Logo" 
            width={77} 
            height={77} 
          />
          <h1 className="text-4xl font-bold mb-0 mt-0">Shop</h1>
          <div className="p-4 text-[#000000] bg-opacity-50">
            <Link href="/">Home</Link> &gt; <span>Shop</span>
          </div>
        </div>
      </section>

      <section className="w-full h-auto py-4">
        <div className="flex items-center justify-between p-4 bg-[#FAF4F4] border border-gray-200 rounded-lg">
          <div className="flex items-center gap-4">
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-transform duration-300 hover:scale-110">
              <BiSliderAlt /><span className="mr-2">Filter</span>
            </button>
            <div className="flex items-center gap-2">
              <HiViewGrid className="text-lg cursor-pointer" />
              <BsViewList className="text-lg cursor-pointer" />
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">1-16</span> of <span className="font-medium">32</span> results
          </div>

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
              <select className="p-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-gray-200">
                <option>Default</option>
                <option>Price</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
        {[
          { src: "/images/second-page/Trenton modular sofa_3 1.png", alt: "Product 1", name: "Product 1", price: "Rs. 24,000.00" },
          { src: "/images/second-page/Granite dining table with dining chair 1.png", alt: "Product 2", name: "Product 2", price: "Rs. 32,000.00" },
          { src: "/images/second-page/Outdoor bar table and stool 1.png", alt: "Product 3", name: "Product 3", price: "Rs. 18,000.00" },
          { src: "/images/second-page/Plain console with teak mirror 1.png", alt: "Product 4", name: "Product 4", price: "Rs. 15,000.00" },
          { src: "/images/second-page/Grain coffee table 1.png", alt: "Product 5", name: "Product 5", price: "Rs. 40,000.00" },
          { src: "/images/second-page/Kent coffee table 1.png", alt: "Product 6", name: "Product 6", price: "Rs. 22,000.00" },
          { src: "/images/second-page/Round coffee table_color 2 1.png", alt: "Product 7", name: "Product 7", price: "Rs. 35,000.00" },
          { src: "/images/second-page/Reclaimed teak coffee table 1.png", alt: "Product 8", name: "Product 8", price: "Rs. 28,000.00" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-between text-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <Image
              src={item.src}
              alt={item.alt}
              width={250}
              height={250}
              className="object-cover rounded-md"
            />
            <div className="mt-4">
              <p className="font-medium">{item.name}</p>
              <p className="text-lg font-bold text-black mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-white py-6 flex justify-center">
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 rounded bg-[#FBEBB5] text-[#000000] hover:bg-[#FBEBB5]">
            1
          </button>
          <button className="px-4 py-2 rounded bg-[#FFF9E5] hover:bg-[#FBEBB5]">
            2
          </button>
          <button className="px-4 py-2 rounded bg-[#FFF9E5] hover:bg-[#FBEBB5]">
            3
          </button>
          <button className="px-4 py-2 rounded bg-[#FFF9E5] hover:bg-[#FBEBB5]">
            Next
          </button>
        </div>
      </div>

      <section className="bg-[#FAF4F4] py-8 flex justify-evenly items-center w-full">
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

      <Footer />
      <FooterScale />
    </main>
  );
}

export default page;
