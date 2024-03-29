import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = ({ image }) => {
    const { img1, img2, img3 } = image;
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="w-full" src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full" src={img3} />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
