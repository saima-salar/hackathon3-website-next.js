import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <nav className=" h-100 flex justify-between items-center px-10 py-4 bg-[#FFFFFF] drop-shadow-lg">
        <div className="text-lg font-extrabold transition-transform duration-300 hover:scale-125 ease-in-out">
          Logo
        </div>
        <ul className="flex space-x-6 text-[14px] text-[#000000]">
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-125 ease-in-out">
            <Link href="/store">Shop</Link>
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
        <div className="absolute inset-0 bg-black opacity-5"></div>

        <div className="z-10 text-center text-[#000000]">
            <span className="text-2xl">Logo</span>
          <h1 className="text-4xl md:text-4xl font-bold mb-4">My Account</h1>
          <div className="p-4 text-[#000000] bg-opacity-50">
            <Link href="/">Home</Link> &gt; <span>My Account</span>
          </div>
        </div>
      </section>

      <section>
        <div className="h-760 w-1440 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
            {/* Log In Section */}
            <div className="border-r border-gray-200 pr-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Log In</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username or email address
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full  flex justify-center py-2 px-4 border-2 border-black  rounded-md shadow-sm text-sm font-medium text-[#000000] hover:bg-[#FBEBB5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Log In
                  </button>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Lost Your Password?
                  </a>
                </div>
              </form>
            </div>

            {/* Register Section */}
            <div className="pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Register
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1  py-2 px-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  A link to set a new password will be sent to your email
                  address.
                </p>
                <p className="text-sm text-gray-600">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our <br />{" "}
                  <a
                    href="#"
                    className="text-[#000000] hover:text-indigo-500 font-medium"
                  >
                    privacy policy
                  </a>
                  .
                </p>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border-2 border-[#000000]  rounded-md shadow-sm text-sm font-medium text-[#000000] bg-[#FFFFFF] hover:bg-[#FBEBB5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF4F4]  py-8 flex justify-evenly items-center w-full">
        <div className="text-left">
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p className="text-xs text-[#9F9F9F]">
            For all orders over $50, consectetur <br /> adipim scing elit.
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">90 Days Return</h3>
          <p className="text-xs text-[#9F9F9F]">
            If goods have problems, consectetur <br /> adipim scing elit.
          </p>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <p className="text-xs text-[#9F9F9F]">
            100% secure payment, consectetur <br /> adipim scing elit.
          </p>
        </div>
      </section>

      <footer className="bg-[#FFFFFF] py-8 flex justify-center">
        {/* Footer Content */}
        <div className="container mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold mb-2 text-[#9F9F9F] text-[15px]">Help</h5>
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
    </main>
  );
};

export default page;
