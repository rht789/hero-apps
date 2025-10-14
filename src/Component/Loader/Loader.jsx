import React from "react";
import logoImg from "../../assets/logo.png";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <p className="playfair-font text-4xl md:text-6xl font-bold text-[#632EE3] mb-4">
          L
          <span className="inline-block mx-2">
            <img
              src={logoImg}
              alt="Hero Logo"
              className="w-12 h-12 md:w-16 md:h-16 spin inline-block"
            />
          </span>
          ADING
        </p>

        <div className="mt-8">
          <div className="w-16 h-1 bg-[#632EE3] mx-auto rounded-full opacity-75 animate-pulse"></div>
        </div>

        <p className="playfair-font text-lg text-gray-600 mt-6 animate-pulse">
          Please wait while we load your content...
        </p>
      </div>
    </div>
  );
};

export default Loader;
