// "use client"; // Ensure the component runs on the client side

// import React from "react";
// import { useWishlist } from "../context/WishlistContext";
// import { useCart } from "../context/CartContext";
// import { urlFor } from '@/sanity/lib/image'; // If using Sanity, adjust based on your image handling
// import Link from "next/link";


// const WishlistPage = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();
//   const { addToCart } = useCart();

//   const handleRemoveFromWishlist = (id: string) => {
//     removeFromWishlist(id); // Remove item from wishlist
//   };

//   const handleAddToCart = (item: any) => {
//     addToCart(item); // Add item to cart
//   };

//   return (
//     <div className="container mx-auto py-6">
//       <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>

//       {wishlist.length === 0 ? (
//         <p className="text-center text-xl">Your wishlist is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {wishlist.map((item) => {
//             console.log("Item Image URL: ", item.image); // Debugging the image URL

//             return (
//               <div
//                 key={item.id}
//                 className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Product Image */}
//                 <div className="relative h-64 mb-4">
//                 <img
//              src={item.image ? urlFor(item.image).url() : '/path/to/fallback-image.jpg'}
//             alt={item.name}
//                  className="object-cover w-full h-full rounded-md"
//                          />
//      </div>

//                 {/* Product Details */}
//                 <div className="text-center">
//                   <h3 className="font-semibold text-xl text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600 mt-2">{item.price}</p>

//                   {/* Optional: If you have size/color options */}
//                   <div className="text-sm mt-2">
//                     {item.selectedSize && <p>Size: {item.selectedSize}</p>}
//                     {item.selectedColor && <p>Color: {item.selectedColor}</p>}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="mt-4 flex justify-center gap-4">
//                     <button
//                       onClick={() => handleAddToCart(item)}
//                       className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
//                     >
//                         <Link href="/cartpage"> Add to Cart</Link>
//                     </button>
//                     <button
//                       onClick={() => handleRemoveFromWishlist(item.id)}
//                       className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;




"use client"; // Ensure the component runs on the client side

import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { urlFor } from '@/sanity/lib/image'; // If using Sanity, adjust based on your image handling
import Link from "next/link";

// Define types for item in wishlist
interface WishlistItem {
  id: string;
  name: string;
  price: string;
  image: any;  // Adjust based on how image is structured in your data
  selectedSize?: string;
  selectedColor?: string;
}

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemoveFromWishlist = (id: string) => {
    removeFromWishlist(id); // Remove item from wishlist
  };

  const handleAddToCart = (item: WishlistItem) => {
    addToCart(item); // Add item to cart
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-xl">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item: WishlistItem) => {
            console.log("Item Image URL: ", item.image); // Debugging the image URL

            return (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 mb-4">
                  <img
                    src={item.image ? urlFor(item.image).url() : '/path/to/fallback-image.jpg'}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="text-center">
                  <h3 className="font-semibold text-xl text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.price}</p>

                  {/* Optional: If you have size/color options */}
                  <div className="text-sm mt-2">
                    {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                    {item.selectedColor && <p>Color: {item.selectedColor}</p>}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex justify-center gap-4">
                    <Link href="/cartpage">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                      >
                        Add to Cart
                      </button>
                    </Link>
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

