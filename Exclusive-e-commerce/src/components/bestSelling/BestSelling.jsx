import ProductCard from "../productCard/ProductCard";
import { products } from "../../productData/products";

export default function BestSelling() {
  const bestSellProducts = products.filter(
    (items) => items.status === "bestSelling"
  );
  return (
    <>
      <div className="mt-[70px]">
        <div className="flex items-center gap-x-[16px]">
          <div className="w-[20px] h-[40px] bg-secondary rounded-[4px]"></div>
          <p className="font-poppins font-semibold text-[16px] leading-[20px] text-secondary">
            This Month
          </p>
        </div>
        <div className="mt-[20px] flex justify-between items-center">
          <h1 className="font-inter font-semibold text-[36px] leading-[48px] text-primary">
            Best Selling Products
          </h1>
          <button className="font-poppins font-medium text-[16px] leading-[24px] text-[#FAFAFA] bg-secondary py-4 px-12 rounded-[4px] cursor-pointer hover:bg-primary duration-300">
            View All
          </button>
        </div>
        <div className="mt-[60px] flex gap-x-[30px] overflow-hidden">
          <ProductCard products={bestSellProducts} />
        </div>
      </div>
    </>
  );
}
