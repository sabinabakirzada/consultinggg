import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-1">
          <div className="hr-h4">
            <hr />
            <h4>COMMITTED TO SUCCESS</h4>
          </div>
          <h2>We help to grow your business</h2>
          <p id="h-p">
            Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
            voluptate <br /> velit esscillumlore eu quife nrulla parihatur.
          </p>
          <button>OUR SERVICES</button>
        </SwiperSlide>
        <SwiperSlide className="slide-2">
          <div className="hr-h4">
            <hr />
            <h4>COMMITTED TO SUCCESS</h4>
          </div>
          <h2>We help to grow your business</h2>
          <p id="h-p">
            Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
            voluptate <br /> velit esscillumlore eu quife nrulla parihatur.
          </p>
          <button>OUR SERVICES</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
