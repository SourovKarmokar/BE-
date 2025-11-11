import ProductCard from "../productCard/ProductCard";
import { products } from "../../productData/products";
import CountDown from "../countDown/CountDown";

export default function FlashSales() {
  const flashSaleProducts = products.filter(
    (items) => items.status === "flashSale"
  );
  return (
    <>
      <div className="mt-[140px] pb-[60px] border-b-[1px] border-[rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-x-[16px]">
          <div className="w-[20px] h-[40px] bg-secondary rounded-[4px]"></div>
          <p className="font-poppins font-semibold text-[16px] leading-[20px] text-secondary">
            Today’s
          </p>
        </div>
        <div className="mt-[24px] flex gap-x-[87px] items-center">
          <h1 className="font-inter font-semibold text-[36px] leading-[48px] text-primary">
            Flash Sales
          </h1>
          <CountDown />
        </div>
        <div className="mt-[40px] flex gap-x-[30px] overflow-hidden">
          <ProductCard products={flashSaleProducts} />
        </div>
        <div className="text-center mt-[60px]">
          <button className="font-poppins font-medium text-[16px] leading-[24px] text-[#FAFAFA] bg-secondary py-4 px-12 rounded-[4px] cursor-pointer hover:bg-primary duration-300">
            View All Products
          </button>
        </div>
      </div>
    </>
  );
}
