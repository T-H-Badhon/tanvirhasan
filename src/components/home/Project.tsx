import Image from "next/image";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Projects = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <div className="flex items-center justify-between ">
        <h1 className="text-6xl font-semibold">Projects</h1>
        <h1>
          <MdArrowRightAlt className="w-44 h-32 text-c1" />
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div>
          <Image
            src={"/project/01.jpg"}
            alt="photo"
            width={500}
            height={1000}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={"/project/02.jpg"}
            alt="photo"
            width={500}
            height={1000}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={"/project/03.jpg"}
            alt="photo"
            width={500}
            height={1000}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={"/project/04.jpg"}
            alt="photo"
            width={500}
            height={1000}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={"/project/05.jpg"}
            alt="photo"
            width={500}
            height={1000}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={"/project/06.jpg"}
            alt="photo"
            width={500}
            height={1000}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
