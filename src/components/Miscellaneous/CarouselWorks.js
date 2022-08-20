import React from "react";
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Clients from "./clients.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CarouselWorks() {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
      >
        {Clients &&
          Clients.map((item, index) => {
            return (
              <>
                <SwiperSlide>
                  <figure class="image is-128x128">
                    <img src={item.url} alt={item.description} />
                  </figure>
                </SwiperSlide>
              </>
            );
          })}
       
      </Swiper>
    </div>
  );
}

export default CarouselWorks;
