"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import skills from "../data/skills";

import "swiper/css";
import SkillsCard from "./SkillsCard";

const SkillsCarousel = () => {
    return (
        <>
            <div className="flex justify-center mt-2">
                <Swiper
                    modules={[Autoplay]}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
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
