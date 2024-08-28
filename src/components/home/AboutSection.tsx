import React from "react";

const AboutSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-20 my-36">
      <div className="space-y-4">
        <h1 className="text-c1 text-lg">About me</h1>
        <h1 className="text-5xl font-bold">
          I am an enthusiastic web developer based in New York, with a rich
          experience of over 6 years in website & product design.
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <h1 className="text-3xl text-c1 font-bold">
            I design professional & beautiful websites
          </h1>
        </div>
        <div className="space-y-5">
          <h1 className="text-justify text-c2">
            With years of experience in graphic and web design I have mastered
            the skills of understanding client requirements according to the
            latest trends. I have worked with businesses from different niches
            so you can rely on me for yours.
          </h1>
          <h1 className="text-justify text-c3">
            I’ve spent most of these years working across different areas of
            design like front-end development, landing pages, email design, app
            UI/UX, to my current role designing products for mobile platforms.
            Having worked on various projects that are already live, I can help
            you with the best possible suggestions and ideas that we can proceed
            with. With me, you aren’t forced to accept anything. I give you a
            variety of options we can work on together.
          </h1>

          <button className="text-c1 text-lg">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
