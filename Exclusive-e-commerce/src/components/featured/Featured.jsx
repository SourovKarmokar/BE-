import ps5 from "../../assets/ps5.png";
import womenHat from "../../assets/womenHat.png";
import speaker from "../../assets/speakers.png";
import perfume from "../../assets/perfume.png";
export default function Featured() {
  return (
    <>
      <div className="mt-[140px]">
        <div className="flex items-center gap-x-3">
          <div className="w-[20px] h-[40px] bg-secondary rounded-[4px]"></div>
          <p className="font-poppins font-semibold text-[16px] leading-[20px] text-secondary">
            Today’s
          </p>
        </div>
        <div className="mt-5">
          <h1 className="font-inter font-semibold text-[36px] leading-[48px] text-primary">
            New Arrival
          </h1>
        </div>
        <div className="w-[100%] mt-[60px] flex gap-x-7">
          <div className="w-[50%] overflow-hidden">
            <div className=" bg-primary flex justify-center items-center pt-[90px] px-7 group relative">
              <img
                src={ps5}
                alt="#"
                className="group-hover:scale-110 duration-300"
              />
              <div className="absolute bottom-[32px] left-[32px]">
                <h1 className="font-inter font-semibold text-[24px] leading-6 text-[#FAFAFA]">
                  PlayStation 5
                </h1>
                <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] mt-[14px] mb-[16px]">
                  Black and White version of the PS5
                  <br />
                  coming out on sale.
                </p>
                <button className="font-poppins font-medium text-[16px] leading-[24px] text-white underline underline-offset-6 cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="overflow-hidden">
              <div className="w-[100%] relative group">
                <img
                  src={womenHat}
                  alt="#"
                  className="w-full group-hover:scale-110 duration-300"
                />
                <div className="absolute bottom-6 left-[24px]">
                  <h1 className="font-inter font-semibold text-[24px] leading-6 text-[#FAFAFA]">
                    Women’s Collections
                  </h1>
                  <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] mt-[14px] mb-[16px]">
                    Featured woman collections that
                    <br />
                    give you another vibe.
                  </p>
                  <button className="font-poppins font-medium text-[16px] leading-[24px] text-white underline underline-offset-6 cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[50%]">
                <div className="bg-primary group relative">
                  <img
                    src={speaker}
                    alt="#"
                    className=" group-hover:scale-110 duration-300"
                  />
                  <div className="absolute bottom-6 left-[24px]">
                    <h1 className="font-inter font-semibold text-[24px] leading-6 text-[#FAFAFA]">
                      Speakers
                    </h1>
                    <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA] mt-[8px] mb-[16px]">
                      Amazon wireless speakers
                    </p>
                    <button className="font-poppins font-medium text-[16px] leading-[24px] text-white underline underline-offset-6 cursor-pointer">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
