import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';

const Header = () => {
  return (
    
    <nav className="flex justify-between items-center px-10 py-4 bg-[#FBEBB5] drop-shadow-lg">
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
  );
}

  

export default Header;
