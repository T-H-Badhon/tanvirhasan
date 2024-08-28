import React from "react";

const FixedBg = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/bg-01-free-img.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-[700px] my-36 "
    >
      <div className="bg-gradient-to-br from-white via-transparent to-transparent h-full w-full"></div>
    </div>
  );
};

export default FixedBg;
