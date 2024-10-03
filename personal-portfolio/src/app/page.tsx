"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Myself from "@/components/Myself";
import MySkills from "@/components/MySkills";
import NavBar from "@/components/NavBar";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); 
    };

    useEffect(() => {

        handleResize();

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
            <main className="lg:mt-20">
                <PageHeader />
                <div className="px-4 md:max-w-screen-md md:m-auto mt-8 md:px-8">
                    <Myself />
                    <MySkills isMobile={isMobile} />
                    <Projects isMobile={isMobile} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
