import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ProductRating from '../components/rating/ProductRating';
import { FiHeart } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {  cartTotal } from '../slice/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/product/singleproduct/${id}`
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleAdd = () => {
    // console.log(product);
    dispatch(cartTotal(product))
    
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Product not found</div>
      </div>
    );
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = [
    { name: 'black', value: '#000000' },
    { name: 'red', value: '#EF4444' }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-6 overflow-x-auto whitespace-nowrap">
          Account / Gaming / <span className="inline-block max-w-[150px] sm:max-w-none truncate align-bottom">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
          {/* Left Side - Images */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Thumbnail Images - Horizontal scroll on mobile */}
              <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 order-2 sm:order-1">
                {[1, 2, 3, 4].map((_, index) => (
                  <div 
                    key={index} 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border rounded-md sm:rounded-lg overflow-hidden cursor-pointer hover:border-red-500 transition-colors flex-shrink-0"
                  >
                    <img 
                      src={product.image} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden order-1 sm:order-2">
                <div className="w-full aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="w-full">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 leading-tight">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <div className="flex items-center gap-1">
                <ProductRating rating={product.rating || 4} />
              </div>
              <span className="text-xs sm:text-sm text-gray-500">(150 Reviews)</span>
              <span className="text-xs sm:text-sm text-green-500 font-medium">In Stock</span>
            </div>

            {/* Price */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-red-600">
              ${product.price}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center mb-2 sm:mb-3">
                <span className="font-medium text-sm sm:text-base">Colours:</span>
              </div>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 transition-all hover:scale-110 active:scale-95 ${
                      selectedColor === color.name ? 'border-black ring-2 ring-offset-2 ring-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-5 sm:mb-6">
              <div className="flex items-center mb-2 sm:mb-3">
                <span className="font-medium text-sm sm:text-base">Size:</span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[45px] sm:min-w-[50px] px-3 sm:px-4 py-2 sm:py-2.5 rounded border text-sm sm:text-base font-medium transition-all active:scale-95 ${
                      selectedSize === size
                        ? 'bg-red-500 text-white border-red-500 shadow-md'
                        : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Buy Button and Wishlist */}
            <div className="flex gap-3 mb-5 sm:mb-6">
              {/* Buy Now Button */}
              <button 
              onClick={handleAdd}
              className="flex-1 bg-red-500 text-white py-3 sm:py-4 rounded-lg hover:bg-red-600 active:bg-red-700 font-medium transition-all text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-[0.98]">
                Buy Now
              </button>

              {/* Wishlist Button */}
              <button className="w-12 sm:w-14 h-12 sm:h-14 border-2 rounded-lg hover:bg-gray-50 hover:border-red-500 transition-all active:scale-95 flex items-center justify-center">
                <FiHeart className="text-xl sm:text-2xl" />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex items-start gap-3 p-3 sm:p-4 border-b bg-gray-50">
                <TbTruckDelivery className="text-2xl sm:text-3xl flex-shrink-0 mt-0.5 text-red-500" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Free Delivery</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50">
                <MdOutlineKeyboardReturn className="text-2xl sm:text-3xl flex-shrink-0 mt-0.5 text-red-500" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Return Delivery</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;