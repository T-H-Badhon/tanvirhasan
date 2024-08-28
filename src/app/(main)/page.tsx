import AboutSection from "@/components/home/AboutSection";
import Experiences from "@/components/home/Experiences";
import FixedBg from "@/components/home/FixedBg";
import HeroSection from "@/components/home/HeroSection";
import SkillSection from "@/components/home/SkillSection";
import WhatIDoSection from "@/components/home/WhatIDoSection";
import Image from "next/image";

const Homepage = () => {
  return (
    <div>
      <div className=" relative w-[100vw] ">
        <HeroSection />
      </div>
      <AboutSection />
      <WhatIDoSection />
      <FixedBg />
      <div className="grid grid-cols-2 gap-10 max-w-[1200px] mx-auto">
        <SkillSection />
        <Experiences />
      </div>
    </div>
  );
};

export default Homepage;
