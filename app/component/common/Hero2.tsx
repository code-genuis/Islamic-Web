import React from "react";
// import bgImage from "@/app/assets/img/bg.webp";

const HeroSection = () => {
  return (
    <section className="relative white flex items-center justify-center h-screen text-left px-6 md:px-20 overflow-hidden">
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bgImage.src})`
        }}
      ></div> */}

      <div className="relative z-10 white max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-secondary">UstazPortal<span className="text-primary">.</span> </h1>
        <p className="mt-4 text-lg md:text-xl">
          A Muslim <span className="text-secondary font-bold">video creator</span> and a
          <span className="text-secondary font-bold"> photographer</span> who likes to
          ride adventure motorcycles
        </p>
        <p className="mt-2 text-sm md:text-base white">
          and travel through the world to record his journey and experience on
          YouTube
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-400">
          Happens to hold a Pharm D. & Masters degree in public health
        </p>
        <p className="mt-2 text-sm md:text-base white">
          Dedication towards learning Islam from credible scholars to leave a
          legacy behind. Says "Life is too short to pursue anything other than
          Islam"
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
