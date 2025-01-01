
"use client"
// import React, { useState } from 'react';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// import { IoSearch } from "react-icons/io5";
// import Link from 'next/link';
// import Image from 'next/image';


// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="w-full h-20 flex justify-between items-center px-10 py-4 bg-[#FBEBB5] drop-shadow-lg relative">
//       {/* Logo and Hamburger Container */}
//       <div className="flex items-center justify-between w-full md:w-auto">
//         {/* Logo */}
//         <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">  
//           <Image 
//             src="/images/contact/logo.png" 
//             alt="logo" 
//             width={40} 
//             height={40} 
//           />
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden flex items-center ml-4 mr-4"> {/* Add margin-right here */}
//           <button onClick={toggleMenu} className="text-black text-[30px]">
//             {isMenuOpen ? 'X' : '☰'}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="md:hidden flex flex-col space-y-4 absolute top-20 left-0 w-full bg-[#FBEBB5] p-4 text-center z-10">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>
//       )}

//       {/* Desktop Menu (Always visible on larger screens) */}
//       <ul className="hidden md:flex space-x-6 text-[14px] text-[#000000]">
//         <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/">Home</Link></li>
//         <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/shop">Shop</Link></li>
//         <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/about">About</Link></li>
//         <li className='transition-transform duration-300 hover:scale-125 ease-in-out'><Link href="/contact">Contact</Link></li>
//       </ul>

//       {/* Icons (Mobile and Desktop) */}
//       <div className="flex space-x-4 ml-auto md:ml-0">
//         {/* These icons should be visible both on small and large screens */}
//         <Link href="/account">
//           <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out cursor-pointer" />
//         </Link>
//         <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
//         <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
//         <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-100 flex justify-between items-center px-10 py-4 bg-[#FBEBB5] drop-shadow-lg">
      {/* Logo */}
      <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
        <Image src="/images/contact/logo.png" alt="image" width={40} height={40} />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-[14px] text-[#000000]">
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

      {/* Icons */}
      <div className="flex space-x-4">
        <Link href="/account">
          <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out cursor-pointer" />
        </Link>
        <IoSearch className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
        <FaRegHeart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 hover:text-red-700 ease-in-out" />
        <MdOutlineShoppingCart className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out" />
        <HiOutlineMenuAlt3
          className="text-black text-[24px] md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white/80 backdrop-blur-md shadow-md rounded-lg p-4 md:hidden">
          <ul className="space-y-4 text-[14px] text-[#000000]">
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
        </div>
      )}
    </nav>
  );
}

