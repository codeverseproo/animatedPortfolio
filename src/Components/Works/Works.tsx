import { faAmazon, faUpwork } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useThemeContext } from "../../context/ThemeCintextProvider";
import { motion } from "framer-motion"
import { transitionConst } from "../../lib/appconst";

export default function Works() {

    const [isMouseOver, setIsMouseOver] = useState(false)
    const theme = useThemeContext()?.theme;

    return (

        <section className="padding-x flex py-[5rem] max-lg:py-[3rem] max-lg:flex-col max-lg:gap-[7rem] items-center">
            <div className="flex-1 max-lg:flex max-lg:flex-col max-lg:text-center max-lg:justify-center max-lg:items-center">
                <h3 className="font-ubuntu font-bold text-[40px] max-md:text-[2rem] max-md:leading-[3rem] tracking-tight leading-[3rem]">Worked For All These</h3>
                <h3 className="font-ubuntu font-bold text-[40px] max-md:text-[2rem] max-md:leading-[3rem] tracking-tight leading-[3rem] text-pictonBlue-500">Brands and Clients</h3>
                <p className="mt-[2rem] max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum eum vero dolor in atque, ratione ut corporis, inventore nemo voluptate. Maiores exercitationem cupiditate adipisci non ipsa ea ratione suscipit?
                </p>
                <a className="mt-[2rem] max-lg:mt-[1rem]"><button className="btn-primary hover:btn-primary-hover mt-[2rem]">Hire Me</button></a>
            </div>
            <div onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} className={`max-lg:w-full flex-1 text-[5rem] max-md:text-[3rem] flex justify-center items-center relative max-w-[90%] ${theme == 'dark' && 'text-codGray-500'}`}>
                <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={transitionConst}
                    className={`w-[15rem] max-md:w-[12rem] h-[15rem] max-md:h-[12rem] shadow-2xl shadow-bitterSweet-500 bg-gallary-500 rounded-full flex justify-center items-center transition-all duration-300 ${isMouseOver && "rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faAmazon} />
                </motion.div>
                <div className={`shrink-1 w-[8rem] max-md:w-[6rem] h-[8rem] max-md:h-[6rem] ring-4 ring-codGray-500 bg-gallary-500 rounded-full flex justify-center items-center absolute max-md:-top-[3rem] max-lg:-top-[3rem] -top-[3rem] transition-all duration-300 ${isMouseOver && "hover:rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faUpwork} />
                </div>
                <div className={`w-[8rem] max-md:w-[6rem] h-[8rem] max-md:h-[6rem] ring-4 ring-codGray-500 bg-gallary-500 rounded-full flex justify-center items-center absolute max-md:right-[10rem] max-lg:right-[9rem] right-[9rem] transition-all duration-300 ${isMouseOver && "hover:rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faUpwork} />
                </div>
                <div className={`w-[8rem] max-md:w-[6rem] h-[8rem] max-md:h-[6rem] ring-4 ring-codGray-500 bg-gallary-500 rounded-full flex justify-center items-center absolute max-md:-bottom-[3rem] max-lg:-bottom-[3rem] -bottom-[3rem] transition-all duration-300 ${isMouseOver && "hover:rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faUpwork} />
                </div>
                <div className={`w-[8rem] max-md:w-[6rem] h-[8rem] max-md:h-[6rem] ring-4 ring-codGray-500 bg-gallary-500 rounded-full flex justify-center items-center absolute max-md:left-[10rem] max-lg:left-[9rem] left-[9rem] transition-all duration-300 ${isMouseOver && "hover:rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faUpwork} />
                </div>
            </div>
        </section>
    )
}
