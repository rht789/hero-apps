import React from "react";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="text-center px-2 md:px-4">
        <h1 className="text-5xl font-bold m-2 mt-8">
          We Build <br />
          <span className="text-[#632EE3]">Productive</span> Apps
        </h1>
        <p className="text-md text-gray-500">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden md:block" /> Our goal is to turn your ideas into
          digital experiences that truly make an impact.
        </p>
        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn m-3 md:m-6 bg-white">
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo.png"
              alt="Google Play Store Logo"
              className="w-4 h-4"
            />
            Google Play
          </button>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn m-3 md:m-6 bg-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
              alt="Apple App Store Logo"
              className="w-4 h-4"
            />
            App Store
          </button>
        </a>
      </div>
      <img
        src={heroImg}
        alt="Hero image"
        className="w-3/4 md:w-1/2 mx-auto mt-4"
      />
      <div className="p-12 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center">
        <h2 className="text-3xl font-bold  mb-4">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="px-10">
            <h5 className="text- text-gray-300">Total Downloads</h5>
            <p className="text-5xl font-bold my-2">29.6M</p>
            <p className="text- text-gray-300">21% More Than Last Month</p>
          </div>
          <div className="px-10">
            <h5 className="text- text-gray-300">Total Reviews</h5>
            <p className="text-5xl font-bold my-2">906K</p>
            <p className="text- text-gray-300">46% More Than Last Month</p>
          </div>
          <div className="px-10">
            <h5 className="text- text-gray-300">Active Apps</h5>
            <p className="text-5xl font-bold my-2">132+</p>
            <p className="text- text-gray-300">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
