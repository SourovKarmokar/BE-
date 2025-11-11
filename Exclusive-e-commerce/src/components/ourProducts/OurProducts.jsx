import ProductCard from "../productCard/ProductCard";
import { products } from "../../productData/products";
export default function OurProducts() {
  const allProduct = products.filter((item) => item.status === "normal");
  console.log(allProduct, "all");

  return (
    <>
      <div className="mt-[71px]">
        <div className="flex items-center gap-x-[10px]">
          <div className="w-[20px] h-[40px] bg-secondary rounded-[4px]"></div>
          <p className="font-poppins font-semibold text-[16px] leading-[20px] text-secondary">
            Our Products
          </p>
        </div>
        <div className="mt-[20px]">
          <h1 className="font-inter font-semibold text-[36px] leading-[48px] text-primary">
            Explore Our Products
          </h1>
        </div>
        <div className="mt-[60px] flex gap-x-[30px] gap-y-[60px] flex-wrap">
          <ProductCard products={allProduct} />
        </div>
        <div className="mt-[60px] text-center">
          <button className="font-poppins font-medium text-[16px] leading-[24px] text-[#FAFAFA] bg-secondary py-4 px-12 rounded-[4px] cursor-pointer hover:bg-primary duration-300">
            View All Products
          </button>
        </div>
      </div>
    </>
  );
}
