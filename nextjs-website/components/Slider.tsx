"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from 'next/image'

export default function Slider() {
  return (
    <div className="w-full rounded-md">
      {/* slider frame */}
      <div className="rounded-t-xl py-[10px] px-[20%] bg-zinc-200 dark:bg-zinc-900 w-full">
        <div className="h-5 rounded-lg bg-zinc-50 dark:bg-zinc-950 w-full" />
      </div>
      <div className="w-full overflow-hidden">
        <Swiper
          loop
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Image src='/slide1.png' width={1300} height={630} alt="Slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/slide2.png' width={1300} height={630} alt="Slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/slide3.png' alt="Slide1" width={1300} height={630} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
