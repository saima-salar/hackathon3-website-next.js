import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
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
  <Link href="/account">
    <FaRegUser className="text-black text-[20px] transition-transform duration-300 hover:scale-125 ease-in-out cursor-pointer" />
  </Link>
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
  <h1 className="text-4xl md:text-4xl font-bold mb-0 mt-0">Checkout</h1>
  <div className="p-4 text-[#000000] bg-opacity-50">
    <Link href="/" >Home</Link> &gt; <span>Checkout</span>
  </div>
</div>
    </section>



    <section className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Billing Details */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-4xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded p-2 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="border rounded p-2 w-full"
            />
            <select className="border rounded p-2 w-full">
              <option>Country / Region</option>
              <option>Sri Lanka</option>
              <option>United States</option>
              <option>India</option>
            </select>
            <input
              type="text"
              placeholder="Street Address"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Province"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border rounded p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded p-2 w-full"
            />
            <textarea
              placeholder="Additional Information"
              className="border rounded p-2 w-full"
              rows={4}
            ></textarea>
          </form>
        </div>

        {/* Cart Summary */}
        <div className="w-1/3 bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mb-4">Product</h2>
          <h2 className="text-lg font-bold mb-4">Subtotal</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Asgaard Sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
          </div>
          <button className="w-full bg-[#FFFFFF] text-[#000000] border-2 border-black py-2 rounded mt-6 hover:bg-[#FFF9E5]">
            Place Order
          </button>
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

<footer className="bg-[#FFFFFF] py-8 flex justify-center">
        {/* Footer Content */}
        <div className="container mx-auto px-5 md:px-10 flex flex-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-normal mb-2 mt-8 text-[#9F9F9F] text-[15px] text-center md:text-left">
              480 University Drive Suite 200 <br /> Coral Gables, 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold mb-2 text-[#9F9F9F] text-[15px]">Links</h5>
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
          <div className="flex flex-col items-center md:items-start c ">
            <h5 className=" mb-2 text-[#9F9F9F] ">Help</h5>
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
            <h5 className="font-bold mb-2 text-[#9F9F9F] text-[15px]">
              Newsletter
            </h5>
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
      <div className="border-t mt-8 pt-2 text-center text-gray-500 text-sm">
      ecommorce © Made by <b className="text-black">Saima Salar</b>, Figma Designed by <b className="text-black">Meubel House</b>
      </div>

</main>
  )
}

export default page