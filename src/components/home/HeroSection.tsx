import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";

const HeroSection = () => {
  return (
    <div className=" relative w-[100vw] ">
      <div className="opacity-40 absolute top-0 right-0">
        <Image
          src={
            "https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/bg-02-free-img.png"
          }
          alt="home background"
          width={1400}
          height={1000}
          className="w-fit h-fit object-cover "
        />
      </div>

      <div className="absolute top-0 pt-24 w-full">
        <div className=" max-w-[1200px] mx-auto flex justify-between items-center">
          <div className=" space-y-20">
            <div>
              <h1 className="pb-3 text-2xl text-c3">Hello, my name is</h1>
              <div className="w-14 h-[2px] bg-c3"></div>
            </div>

            <div className="space-y-5">
              <h1 className="text-7xl text-c2 font-extrabold">Tanvir Hasan</h1>
              <h1 className="text-xl font-bold text-c3">
                Jr. Software Engineer @ Neutron Ltd
              </h1>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <AiOutlineMail className="text-c1 w-6 h-6" />
                <h1 className="text-xl">thbadhons@gmail.com</h1>
              </div>
              <div className="flex items-center space-x-2">
                <SlPhone className="text-c1 w-6 h-6" />
                <h1 className="text-xl">+880 1795 687025</h1>
              </div>
            </div>
          </div>
          <div className=" rounded-full bg-c3  overflow-hidden">
            <Image
              src={
                "https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/about-01-free-img.jpg"
              }
              alt="person"
              width={700}
              height={700}
              className="w-fit h-fit object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
