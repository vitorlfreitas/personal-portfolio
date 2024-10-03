import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="mt-14 bg-gray-800 py-6 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center gap-2 ">
                <a
                    className="shadow w-64 flex items-center gap-2 rounded py-2 px-4 mt-2 bg-purple-900 text-white font-bold text-xl"
                    href="https://github.com/vitorlfreitas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                    MY REPOSITORY
                </a>
                <a
                    className="shadow w-64 flex items-center gap-2 rounded py-2 px-4 mt-2 bg-sky-700 fl text-white font-bold text-xl"
                    href="https://www.linkedin.com/in/vitorlucfreitas/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LuLinkedin />
                    MY LINKEDIN
                </a>
            </div>
            <div className="text-center text-gray-300 text-lg py-2">
                <p>Thank you for visiting my website</p>
                <p>
                    Copyright &copy; Website Developed by{" "}
                    <strong className="text-nowrap">Vitor Freitas</strong>
                </p>
                <p>Last Update: 03/10/2024</p>
            </div>
        </footer>
    );
};

export default Footer;
