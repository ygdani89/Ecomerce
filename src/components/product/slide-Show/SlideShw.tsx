"use client";
import React, { useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

// Import Swiper styles

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "./slide-Show.css";

interface Props {
  images: String[];
  title: String;
  className?: string;
}

function SlideShw({ images, title, className }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        pagination={true}
        // autoplay={{
        //   delay: 2500
        // }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs  , Pagination]}
        className="mySwiper2"
      >
        {images.map((img) => (
          <SwiperSlide key={`${img}`}>
            <Image
              width={900}
              height={600}
              src={`/Products/${img}`}
              alt={`${title}`}
              className="rounded-lg object-fill"
            />

          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((img) => (
          <SwiperSlide key={`${img}`}>
            <Image
              width={300}
              height={200}
              src={`/Products/${img}`}
              alt={`${title}`}
               className="rounded-lg object-fill"
            />

          </SwiperSlide>
        ))}
     
      </Swiper>
    </div>
  );
}

export default SlideShw;
