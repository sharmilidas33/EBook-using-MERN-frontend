import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

// react icons
import { FaStar } from 'react-icons/fa6';

//flowbite
import { Avatar } from 'flowbite-react';

import Profile from '../assets/profile.png';

const Review = () => {
    return (
        <div className='m-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug text-pink-700'>Customer Reviews</h2>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg-rose-300 rounded shadow-2xl border p-4'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat quod aperiam, nesciunt temporibus ad veniam harum veritatis id corporis libero ullam quis architecto illo blanditiis quam commodi? Iure, eius.</p>
                                <Avatar img={Profile} alt=" " rounded className='w-10 mb-4' />
                                <h5 className="text-lg font-medium">John Doe</h5>
                                <p className='text-base'>Manager, XYZ Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-rose-300 rounded shadow-2xl border p-4'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat quod aperiam, nesciunt temporibus ad veniam harum veritatis id corporis libero ullam quis architecto illo blanditiis quam commodi? Iure, eius.</p>
                                <Avatar img={Profile} alt=" " rounded className='w-10 mb-4' />
                                <h5 className="text-lg font-medium">John Doe</h5>
                                <p className='text-base'>Manager, XYZ Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-rose-300 rounded shadow-2xl border p-4'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat quod aperiam, nesciunt temporibus ad veniam harum veritatis id corporis libero ullam quis architecto illo blanditiis quam commodi? Iure, eius.</p>
                                <Avatar img={Profile} alt=" " rounded className='w-10 mb-4' />
                                <h5 className="text-lg font-medium">John Doe</h5>
                                <p className='text-base'>Manager, XYZ Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
}
export default Review
