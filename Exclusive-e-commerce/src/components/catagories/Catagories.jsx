import {
  Camera,
  Gamepad,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";

export default function Catagories() {
  const icons = [
    {
      icon: <Smartphone size={50}/>,
      title: "Phones"
    },
    {
      icon: <Monitor size={50}/>,
      title: "Computers"
    },
    {
      icon: <Watch size={50}/>,
      title: "SmartWatch"
    },
    {
      icon: <Camera size={50}/>,
      title: "Camera"
    },
    {
      icon: <Headphones size={50}/>,
      title: "HeadPhones"
    },
    {
      icon: <Gamepad size={50}/>,
      title: "Gaming"
    },
  ];
  return (
    <>
      <div className="mt-[80px] pb-[70px] border-b-[1px] border-[rgba(0,0,0,0.3)]">
        <div className="flex gap-x-4 items-center">
          <div className="w-[20px] h-[40px] bg-secondary rounded-[4px]"></div>
          <p className="font-poppins font-semibold text-[16px] leading-[20px] text-secondary">
            Categories
          </p>
        </div>
        <div className="mt-[20px]">
          <h1 className="font-inter font-semibold text-[36px] leading-[48px]">
            Browse By Category
          </h1>
        </div>
        <div className="flex justify-between mt-[60px]">
          {icons.map((icon, i) => (
            <button key={i} className="w-[170px] h-[145px] rounded-[4px] border-[1px] border-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center gap-y-4 group hover:bg-secondary duration-300 cursor-pointer">
               <p className="group-hover:text-[#FAFAFA]">{icon.icon}</p>
               <span className="font-poppins font-normal text-[16px] leading-[24px] group-hover:text-[#FAFAFA]">{icon.title}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
