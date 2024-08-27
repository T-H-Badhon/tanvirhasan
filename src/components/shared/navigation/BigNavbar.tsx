import Image from "next/image";
import React from "react";
import NavMenu from "./NavMenu";

const BigNavbar = () => {
  return (
    <div className="mx-3 md:mx-5  lg:mx-auto w-full max-w-[1200px] lg:flex  justify-between items-center  ">
      <div>
        <Image
          src={"/logo/navLogo.png"}
          alt="logo"
          width={400}
          height={200}
          className="w-fit h-14"
        />
      </div>

      <div>
        <NavMenu />
      </div>
    </div>
  );
};

export default BigNavbar;
