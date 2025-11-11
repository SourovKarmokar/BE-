import React from 'react'
import { Link } from "react-router-dom";

const Product = () => {
  const productCategory = [
    {name: "Woman’s Fashion"},
    {name: "Men’s Fashion"},
    {name: "Electronics"},
    {name: "Home & Lifestyle"},
    {name: "Medicine"},
    {name: "Sports & Outdoor"},
    {name: "Baby’s & Toys"},
    {name: "Groceries & Pets"},
    {name: "Health & Beauty"},
  ]

  const productColor = [
    {name: "Color 1"},
    {name: "Color 2"},
    {name: "Color 3"},
    
  ]
  return (
   <div  className="my-9">
     <div className="flex">
      <div className="w-[30%]">
        <div>
          <h2  className="font-poppins font-bold text-[20px] leading-[24px] text-primary flex justify-between">Shop by Category</h2>
        <div>
          {productCategory.map((map) => (
              <div className="py-2">
                <Link
                key={map.id}
                to={map.path}
                className="font-poppins text-base text-primary hover:underline hover:underline-offset-4 transition-all duration-300"
              >
                {map.name}
              </Link>
              </div>
            ))}
            
        </div>
        </div>
        <div>
          <h2  className="font-poppins font-bold text-[20px] leading-[24px] text-primary flex justify-between">Shop by Color</h2>
        <div>
          {productColor.map((map) => (
              <div className="py-2">
                <Link
                key={map.id}
                to={map.path}
                className="font-poppins text-base text-primary hover:underline hover:underline-offset-4 transition-all duration-300"
              >
                {map.name}
              </Link>
              </div>
            ))}
            
        </div>
        </div>
      </div>
      
      <div className="w-[70%]">
        <div key={item.id}>
          <div className="overflow-hidden">
            <div className="relative group bg-[#F5F5F5] w-[270px] h-[250px] flex items-center justify-center rounded-[4px]">
              <img
                className="group-hover:scale-125 duration-300"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute top-[12px] left-[12px] font-poppins font-normal text-[12px] leading-[18px] text-white py-[4px] px-[12px] bg-secondary rounded-[4px]">
                -
                {Math.round(
                  ((item.mainprice - item.offerprice) / item.mainprice) * 100
                )}
                %
              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-white absolute right-[12px] top-[12px] flex items-center justify-center hover:bg-secondary hover:text-white duration-300">
                <Heart />
              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-white absolute right-[12px] top-[54px] flex items-center justify-center hover:bg-secondary hover:text-white duration-300">
                <Eye />
              </div>
              <button
                className="absolute bottom-0 w-full py-2 bg-secondary hover:bg-primary text-white 
                     transform translate-y-full opacity-0 
                     group-hover:translate-y-0 group-hover:opacity-100 
                     transition-all duration-300 cursor-pointer"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="mt-[16px]">
            <h1 className="font-poppins font-medium text-[16px] leading-[24px] text-black">
              {item.title}
            </h1>
            <div className="mt-2 flex gap-x-3">
              <span className="font-poppins font-medium text-[16px] leading-[24px] text-secondary">
                ${item.offerprice}
              </span>
              <span className="font-poppins font-medium text-[16px] leading-[24px] text-[rgba(0,0,0,0.5)] line-through">
                ${item.mainprice}
              </span>
            </div>
            <div className="mt-2 flex gap-x-2">
              <div className="flex">
                {[...Array(5)].map((_, index) =>
                  index < item.stars ? (
                    <BiSolidStar key={index} color="#FFAD33" />
                  ) : (
                    <BiSolidStar key={index} className="text-black/25" />
                  )
                )}
              </div>
              <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]">
                ({item.rating})
              </span>
            </div>
            <div>
              {item.colors && (
                <div className="flex gap-2 mt-2">
                  {item.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border p-0.5 cursor-pointer"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Product
