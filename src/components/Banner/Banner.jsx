import React, { useContext } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Provider/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[400px] lg:h-[750px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            {/* Background Image */}
            <img
              src="https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg"
              alt="hiking"
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 specific-text">
                Connect Through Hobbies
              </h1>
              <p className="text-white font-medium text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mt-3 md:mt-4 mb-6">
                Discover and join local hobby groups or create your own. Build meaningful connections
                around what you love.
              </p>
              <Link
                to={user ? "/allGroups" : "/login"}
                className="px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white  font-medium text-lg"
              >
                Brows Groups
              </Link>
            </div>
          </div>
        </SwiperSlide> 

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            {/* Background Image */}
            <img
              src="https://i.ibb.co/mVbDYpWp/photo.jpg"
              alt="photography"
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 specific-text">
                Manage Your Groups with Ease
              </h1>
              <p className="text-white font-medium text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mt-3 md:mt-4 mb-6">
                Explore local hobby throug.  Register, track, and organize your marathon events from a personalized dashboard designed just for you.
              </p>
              <Link
                to={user ? "/dashboard" : "/login"}
                className="px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white  font-medium text-lg"
              >
                 View Dashboard
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}

        <SwiperSlide>
          <div className="relative w-full h-full">
            {/* Background Image */}
            <img
              src="https://i.ibb.co.com/G3Jn94nY/art.jpg"
              alt="Sports Event"
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 specific-text">
                 Track Your Registrations & Results
              </h1>
              <p className="text-white font-medium text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mt-3 md:mt-4 mb-6">
                View your applied hobby groups, see  details group, and keep track of your achievements all from your profile.
              </p>
              <Link
                to={user ? "/myGroups" : "/login"}
                className="px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white  font-medium text-lg"
              >
                My Groups
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
