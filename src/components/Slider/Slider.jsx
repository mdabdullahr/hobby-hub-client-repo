import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
        className="w-full h-[200px] md:h-[400px] lg:h-[1050px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/btmFnFW/istockphoto-1431068534-612x612.jpg"
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">
                A person draws in art class
              </h2>
              <p className="text-sm md:text-base">
                Want to practice art? The local painting circle is waiting for
                you!
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg"
              alt="Hiking group image"
              className="w-full h-full object-cover"
            />
            <div
              data-aos="zoom-in"
              className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105"
            >
              <h2 className="text-base md:text-2xl font-bold">
                Hiking team trekking in the mountains
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
              src="https://i.ibb.co/zVsw3kYR/books2.jpg"
              alt="Conference"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">Book Club</h2>
              <p className="text-sm md:text-base">
                Love reading books? Join readers like you now!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
