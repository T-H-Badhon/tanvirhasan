import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="my-28 flex items-start justify-between ">
        <div className="flex flex-col h-40">
          <div>
            <h1 className="text-xl">
              Based in Khushtia, Working around world wide
            </h1>
          </div>
          <div className="flex-1"></div>
          <div>
            <h1 className="text-8xl underline">get in touch</h1>
          </div>
        </div>
        <div className="flex items-start space-x-10">
          <div className="space-y-8">
            <h1 className="text-lg font-semibold">Links</h1>
            <div>
              <ul className="text-sm font-semibold">
                <li>Github</li>
                <li>Leet Code</li>
                <li>Codeforce</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-lg font-semibold">Services</h1>
            <div>
              <ul className="text-sm font-semibold">
                <li>Frontend</li>
                <li>Backend</li>
                <li>Native</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-10">
        <h1 className="text-center">
          Copyright © 2024 Portfolio & CV | Powered by Portfolio & CV
        </h1>
      </div>
    </div>
  );
};

export default Footer;
