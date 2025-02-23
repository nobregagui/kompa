"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "../banner1.jpg",
  "../banner2.jpg",
  "../banner3.jpg",
];

const Banner = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img style={{height: '400px', width: '100%'}} src={src} alt={`Banner ${index + 1}`} className="w-full h-auto object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
