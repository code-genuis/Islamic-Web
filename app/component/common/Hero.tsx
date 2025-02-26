"use client"
import React from "react";
// import { Play } from "lucide-react";

function App() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          className="absolute top-0 left-0 min-h-full min-w-full object-cover"
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/b15f331251334e3c80c2533a5acc8764.mp4" type="video/mp4" />
        </video>

        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        {/* <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-8 text-6xl font-bold text-secondary tracking-wide">
            UstazPortal
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white">
            Your gateway to Islamic knowledge and spiritual guidance
          </p>
          <button className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary hover:text-secondary transition-all hover:bg-gray-100">
            <Play className="h-5 w-5" />
            <span>Start Learning Tajweed Today!</span>
          </button>
        </div> */}
      </div>
    </>
  );
}

export default App;
