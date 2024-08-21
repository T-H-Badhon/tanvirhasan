"use client";
import HeroSection from "@/components/home/HeroSection";
import React, { useState } from "react";
import Collapsible from "react-collapsible";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(0);

  const arrayy = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 w-[calc(100vw-40px)] mx-auto overflow-hidden">
      {arrayy.map((item) => {
        return (
          <div
            key={item}
            className={`${
              modal == item && "w-[calc(100vw-40px)] h-56 overflow-hidden  "
            } `}
          >
            <button
              className="w-fit my-5 py-3 px-5 bg-green-600"
              onClick={() => {
                setModal(item);
              }}
            >
              button-{item}
            </button>
            <div className={`absolute -left-0`}>
              <Collapsible open={modal == item} trigger="">
                <div className="bg-red-700 h-24 w-[calc(100vw-40px)] mx-5 flex justify-between items-center">
                  <p>
                    {item}---This is the collapsible content. It can be any
                    element or React component you like.
                  </p>
                  <button onClick={() => {}}>close</button>
                </div>
              </Collapsible>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
