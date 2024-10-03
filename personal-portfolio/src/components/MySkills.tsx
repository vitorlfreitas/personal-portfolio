import React from "react";
import SkillsCarousel from "./SkillsCarousel";
import skills from "@/data/skills";
import SkillsCard from "./SkillsCard";

interface Props {
    isMobile: boolean;
}

const MySkills = ({ isMobile }: Props) => {
    return (
        <section>
            <h2 className="mt-3 text-2xl text-gray-800 font-semibold">
                My Skills
            </h2>
            <div>
                {isMobile ? (
                    <SkillsCarousel />
                ) : (
                    <div className="md:flex md:gap-2 md:px-2">
                        {skills.map((skill, index) => (
                            <SkillsCard key={index} cardDescription={skill} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MySkills;
