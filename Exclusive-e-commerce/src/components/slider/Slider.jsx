import { useEffect, useState } from "react";
import { products } from "../../productData/products.js"
import { Link } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";

export default function Slider() {
    
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = products.slice(0, 5);

  useEffect(() => {
    if (paused) return; 

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [paused, slides.length]);
  return (
    <>
      <div className=" overflow-hidden text-white ml-4 mt-[40px]  ">

        <div
          className=" text-white group relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex justify-between transition-transform duration-700 ease-in-out h-[344px] "
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((product) => (
              <div
                key={product.id}
                className="flex justify-between  items-center min-w-full bg-black"
              >
                
                <div className="pl-[54px] w-[320px] pt-[64px] pb-[47px]">
                  <p className="text-white font-poppins font-normal text-[16px] leading-[24px]">{product.title}</p>
                  <h2 className="!text-white py-3 font-inter font-semibold text-[48px] leading-[60px]">
                    Save upto{" "}
                    {Math.round(
                      ((product.mainprice - product.offerprice) /
                        product.mainprice) *
                        100
                    )}
                    %
                  </h2>
                  <button className="font-medium flex items-center gap-x-2 mt-3">
                    <Link to={`/product/${product.id}`}>
                      <span className="border-b border-white">Shop Now </span>
                    </Link>
                    <BiArrowToRight size={24} />
                  </button>
                </div>
                <div className="pr-[100px] relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[300px] relative z-10 group-hover:scale-125 transition-all duration-200 h-[250px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>


          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current
                    ? "bg-primary border border-gray-600"
                    : "bg-white border-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
