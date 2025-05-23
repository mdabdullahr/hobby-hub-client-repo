import React, { useContext } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Provider/AuthProvider";

const Banner = () => {
  const {user} = useContext(AuthContext);
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0"></div>
      <div data-aos="fade-up" className="relative z-10">

         {/* Typewriter effect */}
        <h2 className="text-lg md:text-2xl lg:text-3xl text-white font-semibold mb-6">
          <Typewriter
            words={[
              "Welcome to our HobbyHub community..!",
              "Join a Book Club",
              "Explore Hiking Crews",
              "Create with Artists",
              "Join. Create. Connect.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>


        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-4 specific-text">
          Connect Through Hobbies
        </h1>
       
        <p className="text-white font-medium text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mt-3 md:mt-4 mb-6">
          Discover and join local hobby groups or create your own. Whether it's
          books, hikes, art, or more — build meaningful connections around what
          you love.
        </p>
        <Link
          to={user ? "/createGroup" : "/login"}
          className="px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white  font-medium text-lg md:text-xl lg:text-2xl"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
