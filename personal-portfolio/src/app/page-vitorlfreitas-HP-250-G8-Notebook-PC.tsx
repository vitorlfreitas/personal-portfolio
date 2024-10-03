"use client";

import Avatar from "@/components/Avatar";
import SkillsCard from "@/components/SkillsCard";
import SkillsCarousel from "@/components/SkillsCarousel";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import {
    FaExternalLinkAlt,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
import "../../styles/styles.css";
import skills from "../data/skills";
import NavBar from "@/components/NavBar";
import PageHeader from "@/components/PageHeader";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        handleResize();

        // Listen for resize events
        window.addEventListener("resize", handleResize);

        const paragraphs = document.querySelectorAll("p");
        const headings = document.querySelectorAll("h2");

        headings.forEach((h) => h.classList.add("dark:text-teal-500"));
        paragraphs.forEach((p) => p.classList.add("dark:text-gray-100"));

        const savedDarkMode = localStorage.getItem("darkMode");

        if (savedDarkMode === "true") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    };

    return (
        <div className="w-screen overflow-x-hidden bg-gray-50 dark:bg-gray-800">
            
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <PageHeader />

                <section className="px-4 md:max-w-screen-md md:m-auto mt-8 md:px-8">
                    <div>
                        <h2 className=" mt-20 text-2xl text-gray-800 font-semibold">
                            Introducing Myself
                        </h2>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            I am a passionate student at Griffith College Cork
                            pursuing a degree in Bachelor of Science in Computer
                            Science since 2023. Currently, I have started the 2
                            stage of this journey.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            During the first stage, I had the opportunity to
                            practice how important and challenging is to work
                            with others people with different ideas. Which
                            successfully led us to concluded one course
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            Besides that, my interesting in Tech has started
                            some years ago. It was when I took a course of
                            Software Development in 2022 offered by Senac Brazil
                            and I realized that being a developer is the only
                            thing that fills me completely. Since then, I have
                            been studying everyday trying to improve my skills.
                        </p>
                    </div>
                    <div>
                        <h2 className="mt-3 text-2xl text-gray-800 font-semibold">
                            Getting to Know Better About Me
                        </h2>
                        <div>
                            {isMobile ? (
                                <SkillsCarousel />
                            ) : (
                                <div className="md:flex md:gap-2 md:px-2">
                                    {skills.map((skill, index) => (
                                        <SkillsCard
                                            key={index}
                                            cardDescription={skill}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="mt-5 text-2xl text-gray-800 font-semibold">
                            Checkout My Latest Project
                        </h2>
                        <div className="mx-auto my-6 shadow-md shadow-gray-700 rounded-xl md:flex">
                            <img
                                className="rounded-t-xl md:rounded-l-xl md:rounded-r-none md:image-square"
                                src="../assets/bartender-website-cover.webp"
                                alt="Image of the The Complete Bartender Guide"
                            />
                            <div className="p-4 rounded-b-xl bg-gray-50 dark:bg-gray-800 md:py-2 md:px-4 md:flex md:flex-col md:justify-between">
                                <div>
                                    <hr className="my-2 sm:hidden md:block" />
                                    <h3 className="font-semibold text-lg italic dark:text-gray-100 ">
                                        The Complete Bartender Guide
                                    </h3>
                                </div>
                                {!isMobile && (
                                    <p className="text-sm py-2 leading-6 text-gray-800">
                                        A website to guide aspirants of
                                        bartending to learn the basics steps,
                                        classic cocktails and techniques which I
                                        have acquired throughout my life. I have
                                        been a Bartender for over 9 years and am
                                        an aspirant of web development, so I
                                        decided to invest my time to develop a
                                        website to share my knowledge while
                                        training my website skills
                                    </p>
                                )}
                                <div>
                                    <a
                                        className="bg-gradient-to-r from-sky-700 to-teal-500 ml-auto flex gap-2 items-center back w-fit py-1 px-2 rounded my-4 text-gray-100 font-semibold md:my-2"
                                        href="#"
                                    >
                                        <FaExternalLinkAlt /> Visit Website
                                    </a>
                                    <hr className="my-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
