import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../../styles/styles.css";

interface Props {
    isMobile: boolean;
}

const Projects = ({ isMobile }: Props) => {
    return (
        <section className="mt-5 ">
            <h2 className="mt-5 text-2xl text-gray-800 font-semibold">
                Checkout My Latest Project
            </h2>
            <div className="w-4/5 mx-auto my-6 shadow-md shadow-gray-700 rounded-xl md:flex hover:scale-105 scale-transition hover:scale-transition">
                <Image
                    className="rounded-t-xl md:rounded-l-xl md:rounded-r-none md:w-2/5"
                    src="/assets/bartender-website-cover.webp"
                    alt="Image of the The Complete Bartender Guide"
                    width={320}
                    height={320}
                />
                <div className="p-4 rounded-b-xl bg-gray-50 dark:bg-gray-800 md:py-2 md:px-4">
                    <h3 className="font-semibold text-lg italic dark:text-gray-100 ">
                        The Complete Bartender Guide
                    </h3>
                    {!isMobile && (
                        <p className="text-md py-2 leading-8 text-gray-800">
                            A website to guide aspirants of bartending to learn
                            the basics steps, classic cocktails and techniques
                            which I have acquired throughout my life
                        </p>
                    )}
                    <a
                        className="bg-gradient-to-r from-sky-700 to-teal-500 ml-auto flex gap-2 items-center back w-fit py-1 px-2 rounded my-4 text-gray-100 font-semibold md:my-2"
                        href="https://bartender.vercel.app" target="_blank"
                    >
                        <FaExternalLinkAlt /> Visit Website
                    </a>
                    <hr className="my-2" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
