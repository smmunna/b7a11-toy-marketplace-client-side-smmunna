import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Banner.css'

// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <div className='my-banner'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slider-image slider-image1'>
                        <div className='space-y-4 px-16 py-32 md:px-16 lg:py-52 lg:px-36'>
                            <h3 className='text-3xl md:text-5xl lg:mt-10 font-semibold'>Build, Create, and Innovate with Engineering Kits</h3>
                            <p className='md:pr-52 lg:pr-96 text-slate-300'>Discover the exciting world of engineering with our range of engineering kits. These kits are designed to inspire young minds and foster creativity and problem-solving skills. </p>
                            <button className='button p-3  hover:btn-warning rounded-lg w-40'>Learn more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-image slider-image2'>
                        <div className='space-y-4 px-16 py-32 md:px-16 lg:py-52 lg:px-36'>
                            <h3 className='text-3xl md:text-5xl lg:mt-10 font-semibold'>Explore the Wonders of Mathematics with Math Kits</h3>
                            <p className='md:pr-52 lg:pr-96 text-slate-300' >Make math fun and engaging with our collection of math kits. These kits combine learning and play to help children develop a strong foundation in mathematical concepts.</p>
                            <button className='button p-3  hover:btn-warning rounded-lg w-40'>Learn more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-image slider-image3'>
                        <div className='space-y-4 px-16 py-32 md:px-16 lg:py-52 lg:px-36'>
                            <h3 className='text-3xl md:text-5xl lg:mt-6 font-semibold'>Unleash Curiosity and Discover the Marvels of Science with Science Kits</h3>
                            <p className='md:pr-52 lg:pr-96 text-slate-300'>Ignite your child's passion for science with our captivating science kits. These kits bring science to life by offering hands-on experiments and investigations. </p>
                            <button className='button p-3  hover:btn-warning rounded-lg w-40'>Learn more</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
