"use client";

import Avatar from "@/components/Avatar";
import SkillsCard from "@/components/SkillsCard";
import SkillsCarousel from "@/components/SkillsCarousel";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import skills from "../data/skills";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Tailwind's "md" breakpoint is 768px
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
        <div className={"w-screen overflow-x-hidden"}>
            <main className="bg-white dark:bg-gray-800">
                <section>
                    <nav className="w-full pl-4 pr-8 md:pr-12 py-4 mb-12 flex justify-between md:mb-2">
                        <a
                            href="#"
                            className="font-bebasNeue text-3xl text-gray-700 dark:text-gray-200"
                        >
                            Vitor
                            <span className="text-sky-800 dark:text-teal-500">
                                Freitas
                            </span>
                        </a>
                        <ul className="flex gap-4 items-center">
                            <li>
                                {/* Conditionally render the icon based on the darkMode state */}
                                {darkMode ? (
                                    <BsSunFill
                                        className="text-yellow-500 cursor-pointer text-2xl dark:text-teal-500"
                                        onClick={toggleDarkMode}
                                    />
                                ) : (
                                    <BsFillMoonStarsFill
                                        className="text-sky-800 cursor-pointer text-2xl dark:text-teal-500"
                                        onClick={toggleDarkMode}
                                    />
                                )}
                            </li>
                            <li>
                                <a
                                    className="shadow-sm bg-gradient-to-r from-sky-700 to-teal-500 text-white px-4 py-2 rounded-md font-bold"
                                    href="#"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="mt-20 mb-30 page-header-container md:flex md:w-screen md:justify-center md:px-20 md:m-auto lg:px-40 xl:px-60">
                        <div className="info-container">
                            <div className="text-center py-10 px-4 md:py-8 md:px-0">
                                <h1 className="text-6xl py-2 text-sky-800 font-bold md:text-4xl dark:text-teal-500">
                                    Vitor Freitas
                                </h1>
                                <h3 className="text-gray-800 text-xl py-2 dark:text-gray-100">
                                    A Student{" "}
                                    <span className="dark:text-teal-500 font-bold text-sky-800 md:font-semibold md:text-lg">
                                        PASSIONATE
                                    </span>{" "}
                                    About{" "}
                                    <span className="dark:text-teal-500 text-sky-800 font-bold md:font-semibold md:text-lg">
                                        TECH
                                    </span>
                                </h3>
                                <p className="text-lg py-5 leading-8 text-gray-800">
                                    I am looking for an opportunity to start
                                    building a new world. Find out more about me
                                    throughout this website!
                                </p>
                            </div>
                            <div className="text-6xl flex justify-center gap-14 py-3 text-sky-800 md:text-5xl">
                                <a
                                    href="https://github.com/vitorlfreitas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shadow-lg dark:text-teal-500"
                                >
                                    <FaGithubSquare />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vitorlfreitas"
                                    target="_blank"
                                    rel="nopener noreferrer"
                                    className="shadow-lg dark:text-teal-500"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://instagram.com/vitor.lfreitas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shadow-lg dark:text-teal-500"
                                >
                                    <FaInstagramSquare />
                                </a>
                            </div>
                        </div>
                        <div className="mt-5 mx-auto">
                            <Avatar />
                        </div>
                    </div>
                </section>
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
                            Projects
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    );
}
