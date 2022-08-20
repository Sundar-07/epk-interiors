import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {Clients &&
          Clients.map((item) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  <figure className="image is-128x128">
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
