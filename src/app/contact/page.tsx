import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";


const page = () => {
  return (
    <main>
    <nav className=" h-100 flex justify-between items-center px-10 py-4 bg-[#FFFFFF] drop-shadow-lg">
      <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
      <Image 
    src="/images/contact/logo.png" 
    alt="image" 
    width={40} 
    height={40} 
  />
      </div>
      <ul className="flex space-x-6 text-[14px] text-[#000000]">
        <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
          <Link href="/">Home</Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
          <Link href="/about">About</Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex space-x-4">
        <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
        <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
        <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
        <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
      </div>
    </nav>

    <section
      className="relative w-full h-316 bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/images/contact/Rectangle 1.png')",
      }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-5"> */}

      <div className="z-10 text-center flex flex-col justify-center items-center text-[#000000]">
  <Image 
    src="/images/contact/logo.png" 
    alt="image" 
    width={77} 
    height={77} 
  />
  <h1 className="text-4xl md:text-4xl font-bold mb-0 mt-0">Contact</h1>
  <div className="p-4 text-[#000000] bg-opacity-50">
    <Link href="/" >Home</Link> &gt; <span>Contact</span>
  </div>
</div>
    </section>

 <section>
    <div className="max-w-6xl mx-20 p-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className=' text-[50px] font-bold h-24 transition-transform duration-300 hover:scale-125 ease-in-out '>Get In Touch With Us</h2>
        <p className="text-gray-600 text-[10px]">
        For More Information About Our Product & Services. Please Feel Free To Drop Us <br />An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
             <FaLocationDot /> Address
            </h3>
            <p className="text-gray-600">
            236 5th SE Avenue, New <br />York NY10000, United <br />States
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaPhoneAlt /> Phone
            </h3>
            <p className="text-gray-600">Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
            <MdAccessTimeFilled /> Working Time
            </h3>
            <p className="text-gray-600">Monday-Friday: 9:00 <br />
                 22:00
                 <br />
            Saturday-Sunday: 9:00 <br />
             21:00</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 ml-0">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Abc@def.com"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Hi! i’d like to ask about"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <button
  type="submit"
  className="w-1/2 py-2 text-[#000000] border-2 border-black bg-white rounded-2xl hover:bg-gray-200"
>
  Submit
</button>

        </form>
      </div>
    </div>

    </section>
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
  )
}

export default page