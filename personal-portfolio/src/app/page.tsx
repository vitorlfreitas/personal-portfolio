import Avatar from "@/components/Avatar";
import SkillsCarousel from "@/components/SkillsCarousel";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <div className="w-screen overflow-x-hidden">
            <main className="bg-white px-6 ">
                <section>
                    <nav className="py-8 mb-12 flex justify-between md:mb-2">
                        <h1 className="font-bebasNeue text-3xl">
                            Vitor<span className="text-sky-800">Freitas</span>
                        </h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill className="text-sky-800 cursor-pointer text-2xl" />
                            </li>
                            <li>
                                <a
                                    className="shadow-sm bg-gradient-to-r from-sky-700 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-bold"
                                    href="#"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="mt-20 mb-30 page-header-container md:flex md:w-screen md:justify-center md:px-60">
                        <div className="info-container md:w-4/5">
                            <div className="text-center py-10 px-4 md:py-8">
                                <h2 className="text-6xl py-2 text-sky-800 font-bold md:text-5xl">
                                    Vitor Freitas
                                </h2>
                                <h3 className="text-gray-800 text-xl py-2">
                                    A Student
                                    {" "}
                                    <span className="font-bold text-sky-800">
                                        PASSIONATE
                                    </span>{" "}
                                   
                                    About{" "}
                                    <span className="text-sky-800 font-bold">
                                        TECH
                                    </span>
                                </h3>
                                <p className="text-lg py-5 leading-8 text-gray-800">
                                    Student looking for an opportunity to start
                                    building a new world. Find out more about me
                                    throughout this website!
                                </p>
                            </div>
                            <div className="text-6xl flex justify-center gap-14 py-3 text-sky-800">
                                <a
                                    href="https://github.com/vitorlfreitas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shadow-lg"
                                >
                                    <FaGithubSquare />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vitorlfreitas"
                                    target="_blank"
                                    rel="nopener noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://instagram.com/vitor.lfreitas"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                <section className="md:max-w-screen-md md:m-auto mt-8">
                    <div>
                        <h3 className="md:mt-40 mt-20 text-2xl text-gray-800 font-semibold">
                            Introducing Myself
                        </h3>
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
                        <div>
                            <SkillsCarousel />
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="mt-5 text-2xl text-gray-800 font-semibold">
                            Projects
                        </h3>
                    </div>
                </section>
            </main>
        </div>
    );
}
