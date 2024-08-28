import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import { FaArrowRightLong, FaLaptopCode } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";

const WhatIDoSection = () => {
  return (
    <div className="mx-auto max-w-[1200px] my-36 space-y-8">
      <h1 className="text-5xl font-bold text-c2">What I do</h1>

      <div className="flex items-center justify-between">
        <h1 className="w-1/2 text-c3">
          From understanding your requirements, designing a blueprint and
          delivering the final product, I do everything that falls in between
          these lines.
        </h1>
        <h1>
          <FaArrowRightLong className="w-44 h-28 text-c1" />
        </h1>
      </div>

      <div className="grid grid-cols-3">
        <div className="px-5 flex items-start space-x-5">
          <h1>
            <FaPencilRuler className="text-c1 w-7 h-7" />
          </h1>
          <div>
            <h1 className="text-2xl text-c1">UI/UX Design</h1>
            <h1 className=" text-c3">
              An effective UI/UX is what captures attention and spreads a clear
              message. I make sure the design is innovative and neat with all of
              this.
            </h1>
          </div>
        </div>
        <div className="px-5 border-l border-c3 flex items-start space-x-5">
          <h1>
            <FaLaptopCode className="text-c1 w-7 h-7" />
          </h1>
          <div className="space-y-3">
            <h1 className="text-2xl text-c1">UI/UX Design</h1>
            <h1 className=" text-c3">
              An effective UI/UX is what captures attention and spreads a clear
              message. I make sure the design is innovative and neat with all of
              this.
            </h1>
          </div>
        </div>
        <div className="px-5 border-l border-c3 flex items-start space-x-5">
          <h1>
            <IoIosPhonePortrait className="text-c1 w-7 h-7" />
          </h1>
          <div>
            <h1 className="text-2xl text-c1">UI/UX Design</h1>
            <h1 className=" text-c3">
              An effective UI/UX is what captures attention and spreads a clear
              message. I make sure the design is innovative and neat with all of
              this.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDoSection;
