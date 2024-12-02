import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.css'

 function Slider() {
  return (
    <>
        <h2 className="inter-800">
             POPULAR THIS WEEK
        </h2>
 <div className='iconsContainer'>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./poster1.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./poster02.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./poster3.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./poster4.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./poster5.png" alt="img" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div> 
    </>
   
  )
}
export default Slider;