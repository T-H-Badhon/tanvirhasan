import BigNavbar from "@/components/shared/navigation/BigNavbar";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="bg-white/20 fixed top-0 w-full h-fit">
        <BigNavbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
