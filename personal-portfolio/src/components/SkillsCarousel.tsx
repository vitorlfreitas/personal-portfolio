"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import skills from "../../data/skills";

import "swiper/css";
import SkillsCard from "./SkillsCard";

const SkillsCarousel = () => {
    return (
        <>
            <h3 className="mt-5 text-2xl text-gray-800 font-semibold">Getting to Know Better About Me</h3>
            <div className="flex justify-center mt-2">
                <Swiper
                    modules={[Autoplay, A11y]}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        800: {
                            slidesPerView: 3,
                            loop: false,
                            autoplay: false,
                            centeredSlides: true,
                            spaceBetween: 10,
                            allowTouchMove: false,
                        },
                    }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {skills.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <SkillsCard cardDescription={skill} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default SkillsCarousel;
