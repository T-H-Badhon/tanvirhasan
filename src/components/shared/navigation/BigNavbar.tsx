import Image from "next/image";
import React from "react";
import NavMenu from "./NavMenu";
import Link from "next/link";

const BigNavbar = () => {
  return (
    <div className="mx-5 my-5 px-5 h-16  shadow-full flex items-center justify-between rounded-xl">
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
      <div className="group p-[2px] rounded-3xl bg-gradient-to-tr from-blue-600 to-red-600 ">
        <Link href={"#"}>
          <h1 className=" px-4 py-2 rounded-3xl bg-white group-hover:bg-transparent group-hover:text-white group-hover:scale-125 text-sm transition-all duration-500">
            Get in Touch
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default BigNavbar;
