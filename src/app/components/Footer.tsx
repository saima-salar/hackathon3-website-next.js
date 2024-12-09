import React from "react";


const Footer = () => {
  return (

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
  );
};




export default Footer;
