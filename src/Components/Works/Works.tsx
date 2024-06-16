import { faAmazon, faUpwork } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useThemeContext } from "../../context/ThemeCintextProvider";

export default function Works() {

    const [isMouseOver, setIsMouseOver] = useState(false)
    const theme = useThemeContext()?.theme;

    return (

        <section className="flex py-[5rem] items-center">
            <div className="flex-1">
                <h3 className="font-ubuntu font-bold text-[40px] tracking-tight leading-[3rem]">Worked For All These</h3>
                <h3 className="font-ubuntu font-bold text-[40px] tracking-tight leading-[3rem] text-pictonBlue-500">Brands and Clients</h3>
                <p className="mt-[2rem] max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum eum vero dolor in atque, ratione ut corporis, inventore nemo voluptate. Maiores exercitationem cupiditate adipisci non ipsa ea ratione suscipit?
                </p>
                <a className="mt-[2rem]"><button className="btn-primary hover:btn-primary-hover mt-[2rem]">Hire Me</button></a>
            </div>
            <div onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} className={`flex-1 text-[5rem] flex justify-center items-center relative max-w-[90%] ${theme == 'dark' && 'text-codGray-500'}`}>
                <div className={`w-[15rem] h-[15rem] shadow-2xl shadow-bitterSweet-500 bg-gallary-500 rounded-full flex justify-center items-center transition-all duration-300 ${isMouseOver && "rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faAmazon} />
                </div>
                <div className={`shrink-1 w-[8rem] h-[8rem] ring-4 ring-codGray-500 bg-gallary-500 rounded-full flex justify-center items-center absolute -top-[4rem] transition-all duration-300 ${isMouseOver && "hover:rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faUpwork} />
                </div>
                <div className={`w-[8rem] h-[8rem] ring-4 ring-codGray-500 bg-gallary-500 rounded-full flex justify-center items-center absolute right-[8rem] transition-all duration-300 ${isMouseOver && "hover:rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faUpwork} />
                </div>
                <div className={`w-[8rem] h-[8rem] ring-4 ring-codGray-500 bg-gallary-500 rounded-full flex justify-center items-center absolute -bottom-[4rem] transition-all duration-300 ${isMouseOver && "hover:rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faUpwork} />
                </div>
                <div className={`w-[8rem] h-[8rem] ring-4 ring-codGray-500 bg-gallary-500 rounded-full flex justify-center items-center absolute left-[8rem] transition-all duration-300 ${isMouseOver && "hover:rotate-[360deg]"}`}>
                    <FontAwesomeIcon icon={faUpwork} />
                </div>
            </div>
        </section>
    )
}