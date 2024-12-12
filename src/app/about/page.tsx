
import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';


const page = () => {
  return (
    <main>
    <nav className="flex justify-between items-center px-10 py-4 bg-[#FFFFFF] drop-shadow-lg">
      <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">  
         <Image 
          src="/images/contact/logo.png" 
          alt="image" 
          width={40} 
          height={40} 
        /></div>
      <ul className="flex space-x-6 text-[14px] text-[#000000]">
        <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/" >Home</Link></li>
        <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/shop">Shop</Link></li>
        <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/">About</Link></li>
        <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/contact">Contact</Link></li>
      </ul>


      

<div className="flex space-x-4">
  <Link href="/account">
    <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out cursor-pointer" />
  </Link>
  <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
  <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
  <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
</div>

    </nav>

<section className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full flex items-center justify-center bg-blue-100">
        <div className="absolute inset-0">
          <Image
            src="/images/about/Rectangle 15.png"
            alt="Background"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="z-10 text-center flex flex-col items-center">
  <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
    <Image
      src="/images/contact/logo.png"
      alt="logo"
      width={100}
      height={100}
      className="hover:opacity-80"
    />
  </div>
  <h1 className="text-5xl mb-4 font-bold text-[#000000] transition-transform duration-300 hover:scale-110">
    Design Studio
  </h1>
  <p className="text-lg text-[#000000]">
    Going all-in with millennial design
  </p>
</div>

      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6">
        {/* Product 1 */}
        <div className="relative h-[300px] bg-blue-50 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <Image
            src="/images/about/Asgaard sofa 3.png"
            alt="Product 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product 2 */}
        <div className="relative h-[300px] bg-blue-50 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <Image
            src="/images/about/Outdoor bar table and stool 1.png"
            alt="Product 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product 3 */}
        <div className="relative h-[300px] bg-blue-50 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <Image
            src="/images/about/Reclaimed teak Sideboard 1.png"
            alt="Product 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>

    <div
      className="h-450 w-1440 flex items-center justify-center mt-6"
      style={{
        backgroundImage: `url('/images/instagram/Rectangle 17.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center p-5">
        <h1 className="text-5xl font-bold mb-3  transition-transform duration-300 hover:scale-125 ease-in-out ">Our Instagram</h1>
        <p className="text-[#000000] mb-4">Follow our store on Instagram</p>
        <button className="bg-[#FAF4F4] text-[#000000] h-12 w-30 md:w-48 rounded-3xl shadow-md flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
  <span>Follow Us</span>
</button>

      </div>
    </div>

    
<section className="bg-[#FAF4F4]  py-8 flex justify-evenly items-center w-1440 h-300">
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

<footer className="bg-[#FFFFFF] w-1440 h-555 py-8">
      <div className="container mx-auto px-5 md:px-10 flex flex-cols-1 md:grid-cols-4 gap-8">
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
          className="text-black font-bold px-4 py-2 border-b-2 border-[#000000] hover:bg-gray-800 hover:text-white transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</footer>

    </main>
);
};

export default page;
