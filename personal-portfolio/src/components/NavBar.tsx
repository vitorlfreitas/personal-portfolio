import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

interface Props {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const NavBar = ({ darkMode, toggleDarkMode }: Props) => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-50 dark:bg-gray-800 pl-4 pr-8 md:pr-12 py-4 mb-12 flex justify-between md:mb-2">
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
    );
}
export default NavBar;