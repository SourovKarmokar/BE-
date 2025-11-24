import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { BiSolidStar } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import ProductRating from "../components/rating/ProductRating";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [totalData, setTotlalData] = useState(0);
  const [currentPage , setCurrentPage ] = useState(1);
  const [productPerPage , setProductPerPage] = useState(3)

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        // "http://localhost:3000/api/v1/product/getallproduct"
        `http://localhost:3000/api/v1/product/getallproduct?page=${currentPage}&size=${productPerPage}`
      );
      setTotlalData(data.total);

      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(product);

  const pageArr = [...Array(Math.ceil(totalData / productPerPage)).keys()].map((item) => item + 1);
  useEffect(() => {
    fetchProduct();
  }, [currentPage, productPerPage]);

  const productCategory = [
    { name: "Woman’s Fashion" },
    { name: "Men’s Fashion" },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby’s & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" },
  ];

  const productColor = [
    { name: "Color 1" },
    { name: "Color 2" },
    { name: "Color 3" },
  ];
  return (
    <div className="my-9">
      <div className="flex">
        <div className="w-[30%]">
          <div>
            <h2 className="font-poppins font-bold text-[20px] leading-[24px] text-primary flex justify-between">
              Shop by Category
            </h2>
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
            <h2 className="font-poppins font-bold text-[20px] leading-[24px] text-primary flex justify-between">
              Shop by Color
            </h2>
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
          <div className="flex justify-between flex-wrap space-y-10">
            {product.map((product) => (
              <Link to={`/productdetails/${product._id}`}>
                <div className="overflow-hidden">
                  <div className="relative group bg-[#F5F5F5] w-[270px] h-[250px] flex items-center justify-center rounded-[4px]">
                    <img
                      className="group-hover:scale-125 duration-300"
                      src={product.image}
                    />
                    <div className="absolute top-[12px] left-[12px] font-poppins font-normal text-[12px] leading-[18px] text-white py-[4px] px-[12px] bg-secondary rounded-[4px]">
                      - 3 %
                    </div>
                    <div className="w-[34px] h-[34px] rounded-full bg-white absolute right-[12px] top-[12px] flex items-center justify-center hover:bg-secondary hover:text-white duration-300">
                      <FaRegHeart />
                    </div>
                    <div className="w-[34px] h-[34px] rounded-full bg-white absolute right-[12px] top-[54px] flex items-center justify-center hover:bg-secondary hover:text-white duration-300">
                      <LuEye />
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
                    {product.name}
                  </h1>
                  <div className="mt-2 flex gap-x-3">
                    <span className="font-poppins font-medium text-[16px] leading-[24px] text-secondary">
                      {product.price}
                    </span>
                    <span className="font-poppins font-medium text-[16px] leading-[24px] text-[rgba(0,0,0,0.5)] line-through">
                      {product.discount}
                    </span>
                  </div>
                  <div className="mt-2 flex gap-x-2">
                    {/* <div className="flex">
                      <BiSolidStar color="#FFAD33" />
                      <BiSolidStar color="#FFAD33" />
                      <BiSolidStar color="#FFAD33" />
                    </div>
                    <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]">
                      ({product?.rating})
                    </span> */}
                    <ProductRating rating={product.rating} />
                  </div>
                  <div></div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-x-10 mt-6">
            <button 
            disabled={currentPage == 1 }
            onClick={()=> setCurrentPage(currentPage - 1)}
            >Prev</button>
            {pageArr.map((item) => (
              <p className={`text-white px-2 rounded
                ${currentPage === item ? "bg-black": "bg-gray-400 "}
                `} onClick={() => setCurrentPage(item)}>{item}</p>
            ))}
            <button
            disabled={currentPage == pageArr.length }
            onClick={()=>setCurrentPage(currentPage + 1)} >Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
