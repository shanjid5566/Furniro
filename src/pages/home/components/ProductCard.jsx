import React from "react";

const ProductCard = ({ product }) => {
    console.log(product.photo)
  return (
    <div className="w-72 overflow-hidden shadow-md bg-white">
      {/* Image with discount badge */}
      <div className="relative">
        <img
          src="https://i.ibb.co.com/Kjp4Fmjx/image-1.png"
          alt="Syltherine chair"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
          -30%
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">Syltherine</h3>
        <p className="text-sm text-gray-500 mb-2">Stylish cafe chair</p>

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">
            Rp 2.500.000
          </span>
          <span className="text-sm text-gray-400 line-through">
            Rp 3.500.000
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
