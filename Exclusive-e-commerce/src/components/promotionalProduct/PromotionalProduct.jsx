import Timer from "./timer";
import jblSpeaker from "../../assets/jblSpeaker.png";

export default function PromotionalProduct() {
  return (
    <>
      <div className="mt-[140px] bg-primary flex items-center justify-between group">
        <div className="py-[69px] pl-[69px]">
          <p className="font-poppins font-semibold text-[16px] leading-[20px] text-[#00FF66]">
            Categories
          </p>
          <h1 className="font-inter font-semibold text-[48px] leading-[60px] text-[#FAFAFA] mt-8">
            Enhance Your
            <br />
            Music Experience
          </h1>
          <div className="mt-8">
            <Timer />
          </div>
          <button className="font-poppins font-medium text-[16px] leading-[24px] text-[#FAFAFA] bg-[#00FF66] py-4 px-12 rounded-[4px] cursor-pointer hover:bg-[#00ff66c2] duration-300 mt-[40px]">
            Buy Now!
          </button>
        </div>
        <div className="relative pr-[69px] cursor-pointer">
          <img src={jblSpeaker} className="relative z-10" alt="" />
          <div className="absolute w-0 h-0 group-hover:w-full group-hover:h-full top-1/2 left-1/2 -translate-1/2 transition-all duration-300 bg-white/20 rounded-full blur-3xl "></div>
        </div>
      </div>
    </>
  );
}
