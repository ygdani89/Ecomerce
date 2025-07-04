"use client";

import Image from "next/image";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import "./slide-Show.css";

interface Props {
  images: String[];
  title: String;
  className?: string;
}

function MobileSlideShow({ images, title, className }: Props) {
  return (
    <div className={className}>
      <Swiper


style={{
  width: "100vw",
  height: "500px"
}}
       pagination={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay,Pagination]}
        className="mySwiper2"
      >
        {images.map((img) => (
          <SwiperSlide key={`${img}`}>
            <Image
              width={500}
              height={400}
              src={`/Products/${img}`}
              alt={`${title}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileSlideShow;
