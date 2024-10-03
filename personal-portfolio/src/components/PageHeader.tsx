import React from "react";
import Avatar from "@/components/Avatar";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const PageHeader = () => {
    return (
        <div className="mt-20 md:mt-20 mb-30 page-header-container md:flex md:w-screen md:justify-center md:px-20 md:m-auto lg:px-40 xl:px-60">
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
                        I am looking for an opportunity to start building a new
                        world. Find out more about me throughout this website!
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
                        href="https://www.linkedin.com/in/vitorlucfreitas/"
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
    );
};

export default PageHeader;
