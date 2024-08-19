"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavMenu = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center space-x-3">
      <Link
        href={"/"}
        className={`${
          pathName == "/" ? "animate-bounce" : "group"
        }   h-8 overflow-hidden text-base hover:bg-black hover:text-white py-1 px-4 rounded-s-full rounded-e-full`}
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Home
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Home
        </h1>
      </Link>

      <Link
        href={"/skills"}
        className={`${
          pathName == "/skills" ? "animate-bounce" : "group"
        }   h-8 overflow-hidden text-base hover:bg-black hover:text-white py-1 px-4 rounded-s-full rounded-e-full`}
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Skills
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Skills
        </h1>
      </Link>

      <Link
        href={"/experiences"}
        className={`${
          pathName == "/experiences" ? "animate-bounce" : "group"
        }   h-8 overflow-hidden text-base hover:bg-black hover:text-white py-1 px-4 rounded-s-full rounded-e-full`}
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Experiences
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Experiences
        </h1>
      </Link>

      <Link
        href={"/academic"}
        className={`${
          pathName == "/academic" ? "animate-bounce" : "group"
        }   h-8 overflow-hidden text-base hover:bg-black hover:text-white py-1 px-4 rounded-s-full rounded-e-full`}
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Academic
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Academic
        </h1>
      </Link>

      <Link
        href={"/projects"}
        className={`${
          pathName == "/projects" ? "animate-bounce" : "group"
        }   h-8 overflow-hidden text-base hover:bg-black hover:text-white py-1 px-4 rounded-s-full rounded-e-full`}
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Projects
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Projects
        </h1>
      </Link>

      <Link
        href={"/contacts"}
        className={`${
          pathName == "/contacts" ? "animate-bounce" : "group"
        }   h-8 overflow-hidden text-base hover:bg-black hover:text-white py-1 px-4 rounded-s-full rounded-e-full`}
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Contacts
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Contacts
        </h1>
      </Link>
    </div>
  );
};

export default NavMenu;
