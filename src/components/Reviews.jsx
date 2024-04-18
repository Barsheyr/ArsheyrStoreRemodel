import React from "react";
import alexander from "../assets/project-assets/catherine.png";
import catherine from "../assets/project-assets/alexander.png";
import jason from "../assets/project-assets/jason.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <main className="py-32">
      <h1 className="text-4xl text-center mb-20"> Testimonials </h1>
      <div className="flex flex-row gap-10  px-2 lg:px-0">
        <div className="flex flex-col gap-10">
          <p className="lg:text-xl text-sm"> REVIEWS</p>
          <h1 className="lg:text-4xl text-2xl">
            What buyers say <br /> about our store
          </h1>
          <div className="btn lg:w-[50%] btn-primary ">
            <p className="lg:text-xl text-sm">Shop Now </p>
          </div>
        </div>

        <Swiper
          breakpoints={{
            120: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1.5, spaceBetween: 10 },
            1024: { slidesPerView: 2.5, spaceBetween: 10 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-2/3 text-white"
        >
          <SwiperSlide className="bg-[#303030] rounded-md">
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <img src={alexander} alt="" className="w-[20%]" />
                <p className="text-sm text-gray-400"> Alexander , 23rd 2018 </p>
              </div>
              <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, at? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Consectetur, at?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#303030] rounded-md ">
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <img src={catherine} alt="" className="w-[20%]" />
                <p className="text-sm text-gray-400"> Catherine , 23rd 2018 </p>
              </div>
              <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, at? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Consectetur, at?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#303030] rounded-md ">
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <img src={jason} alt="" className="w-[20%]" />
                <p className="text-sm text-gray-400"> Jason , 23rd 2018 </p>
              </div>
              <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, at? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Consectetur, at?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#303030] rounded-md ">
            <div className="p-5">
              <div className="flex flex-row justify-between items-center">
                <img src={jason} alt="" className="w-[20%]" />
                <p className="text-sm text-gray-400"> Jason , 23rd 2018 </p>
              </div>
              <p className="mt-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, at? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Consectetur, at?
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Reviews;
