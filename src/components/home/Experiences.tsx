import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Experiences = () => {
  return (
    <div>
      <h1 className="text-6xl font-semibold">My Experiences</h1>
      <div className="my-10">
        <div className="flex items-start space-x-5">
          <div className="w-[650px] text-nowrap">
            <h1 className="font-semibold">25 May 2024-Present</h1>
            <div className="flex items-center ">
              <hr className="w-full flex-1"/>
              <IoIosArrowDroprightCircle className="w-6 h-6" />
            </div>
            <h1 className="font-semibold uppercase">Neutron Ltd</h1>
          </div>
          <div className="space-y-5">
            <h1 className="uppercase text-2xl font-semibold text-c1">Junior Software Engineer</h1>
            <h1 className="text-sm">I was responsible for all the in-house and client-based web development assignments. I take pride in having helped the best of clients and getting maximum ratings for the company.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
