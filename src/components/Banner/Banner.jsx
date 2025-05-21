import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-4 specific-text">
          Connect Through Hobbies
        </h1>
        <p className="text-white font-medium text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mt-3 md:mt-4 mb-6">
          Discover and join local hobby groups or create your own. Whether it's
          books, hikes, art, or more — build meaningful connections around what
          you love.
        </p>
        <Link to="/login" className="px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white  font-medium text-lg md:text-xl lg:text-2xl">Get Started</Link>
      </div>
    </div>
  );
};

export default Banner;
