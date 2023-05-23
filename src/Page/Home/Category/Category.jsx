import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import silde1 from '../../../assets/slider/slide1.jpg';
import silde2 from '../../../assets/slider/slide2.jpg';
import silde3 from '../../../assets/slider/slide3.jpg';
import silde4 from '../../../assets/slider/slide4.jpg';
import silde5 from '../../../assets/slider/slide5.jpg';

const Category = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide ><img src={silde1} alt="" />
                <h3 className='text-center lg:text-4xl md:text-xl  text-white -mt-16 uppercase'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide ><img src={silde2} alt="" />
                <h3 className='text-center lg:text-4xl md:text-xl  text-white -mt-16 uppercase'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide ><img src={silde3} alt="" />
                <h3 className='text-center lg:text-4xl md:text-xl  text-white -mt-16 uppercase'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide ><img src={silde4} alt="" />
                <h3 className='text-center lg:text-4xl md:text-xl  text-white -mt-16 uppercase'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide ><img src={silde5} alt="" />
                <h3 className='text-center lg:text-4xl md:text-xl  text-white -mt-16 uppercase'>vegetable</h3>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Category;