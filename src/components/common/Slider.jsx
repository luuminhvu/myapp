import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const SliderComponent = () => {
  return (
    <div className="container mx-auto mt-10 bg-purple-500 w-[1120px] h-[710px] rounded-3xl flex flex-col justify-center items-center">
      <div className="w-full flex justify-start">
        <h1 className="p-24 text-[40px] text-white font-bold">Testimonials</h1>
      </div>
      <div className="relative">
        <button
          className="swiper-button-prev-custom absolute left-[-50px] top-[50%] transform -translate-y-1/2 text-3xl text-white"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          className="swiper-button-next-custom absolute right-[-50px] top-[50%] transform -translate-y-1/2 text-3xl text-white"
          aria-label="Next Slide"
        >
          &#8594;
        </button>

        <Swiper
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          style={{ width: "931px", height: "330px" }}
        >
          <SwiperSlide>
            <div className="w-[931px] h-[330px] mx-auto bg-white rounded-3xl p-10 shadow-lg flex text-left relative">
              <div className="w-[30%] flex justify-center mt-10">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Profile"
                  className="w-[80px] h-[80px] rounded-full"
                />
              </div>
              <div className="w-[340px] ml-6 mt-10">
                <h2 className="text-xl font-bold">John Fang</h2>
                <a
                  href="https://wordfaang.com"
                  className="text-blue-600 hover:underline mb-4"
                >
                  wordfaang.com
                </a>
                <p className="text-gray-600 mt-8 leading-7">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[931px] h-[330px] mx-auto bg-white rounded-3xl p-10 shadow-lg flex text-left relative">
              <div className="w-[30%] flex justify-center mt-10">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Profile"
                  className="w-[80px] h-[80px] rounded-full"
                />
              </div>
              <div className="w-[340px] ml-6 mt-10">
                <h2 className="text-xl font-bold">John Fang</h2>
                <a
                  href="https://wordfaang.com"
                  className="text-blue-600 hover:underline mb-4"
                >
                  wordfaang.com
                </a>
                <p className="text-gray-600 mt-8 leading-7">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[931px] h-[330px] mx-auto bg-white rounded-3xl p-10 shadow-lg flex text-left relative">
              <div className="w-[30%] flex justify-center mt-10">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Profile"
                  className="w-[80px] h-[80px] rounded-full"
                />
              </div>
              <div className="w-[340px] ml-6 mt-10">
                <h2 className="text-xl font-bold">John Fang</h2>
                <a
                  href="https://wordfaang.com"
                  className="text-blue-600 hover:underline mb-4"
                >
                  wordfaang.com
                </a>
                <p className="text-gray-600 mt-8 leading-7">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination-custom mt-10 flex justify-center"></div>
      </div>
    </div>
  );
};

export default SliderComponent;
