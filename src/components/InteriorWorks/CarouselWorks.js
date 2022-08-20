import React from "react";
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CarouselWorks() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        
      >
        <SwiperSlide>
          <figure class="image is-3by2">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure class="image is-3by2">
            <img
              src="https://picsum.photos/480/320/?random"
              alt="Description"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure class="image is-3by2">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure class="image is-3by2">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure class="image is-3by2">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure class="image is-3by2">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselWorks;
