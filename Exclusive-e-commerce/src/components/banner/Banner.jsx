import { ChevronRight } from "lucide-react";
import Slider from "../../components/slider/Slider";
import Container from "../container/Container";

export default function Banner() {
  const sideBar = [
    { name: "Woman’s Fashion", icon: <ChevronRight /> },
    { name: "Men’s Fashion", icon: <ChevronRight /> },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby’s & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" },
  ];
  return (
    <>
      <Container>
        <div className="flex w-[100%]">
          <div className=" w-[20%] border-r-[1px] border-[rgba(0,0,0,0.3)]">
            <div className="pt-[40px] flex flex-col gap-y-[16px]">
              {sideBar.map((menu, i) => (
                <a
                  className="font-poppins font-normal text-[16px] leading-[24px] text-primary flex justify-between"
                  key={i}
                  href="#"
                >
                  {menu.name}
                  {menu.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-[80%]">
            <Slider />
          </div>
        </div>
      </Container>
    </>
  );
}
