import BigNavbar from "@/components/shared/navigation/BigNavbar";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>
        <BigNavbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
