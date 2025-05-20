import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
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
        className="w-full h-[200px] md:h-[400px] lg:h-[875px] xl:h-[980px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/Dn9L2TC/photography.jpg"
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">
                Photography Event
              </h2>
              <p className="text-sm md:text-base">
                Learn and upgrade your photography skills with expert-led sessions.
              </p>
            </div>
          </div>
        </SwiperSlide>
       

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/jk92M6Bm/painting.jpg"
              alt="Art Exhibition"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">
                Modern Painting Expo
              </h2>
              <p className="text-sm md:text-base">
                Explore local creativity through stunning art pieces.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
         <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/VW1Shbkb/hiker.jpg"
              alt="Hiking group image"
              className="w-full h-full object-cover"
            />
            <div
              data-aos="zoom-in"
              className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105"
            >
              <h2 className="text-base md:text-2xl font-bold">
                Hiking Crews
              </h2>
              <p className="text-sm md:text-base">
                Experience local hiking crews events.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/C39Wdn5j/book.jpg"
              alt="Conference"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">
                Book Club 2025
              </h2>
              <p className="text-sm md:text-base">
                A cozy gathering for book lovers to discuss and share thoughts on their latest reads.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
