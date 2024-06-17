import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"

import { introDetail, introShowoffSkill, socialLinks, transitionConst } from "../../lib/appconst";
import myPic from "../../assets/self/self no bg.png"
import mustaches from "../../assets/icons/mustches.svg"
import { useThemeContext } from "../../context/ThemeCintextProvider";

export default function Intro() {

    const theme = useThemeContext()?.theme;
    const transition = transitionConst;
    return (
        <section className="padding-x flex justify-center items-center gap-[2rem] max-lg:gap-[4rem] py-[5rem] max-md:py-[2rem] max-lg:flex-col">
            <div className="max-md:w-full w-1/2 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:text-center">
                <h2 className="max-md:text-[2rem] capitalize font-ubuntu font-bold text-[60px] tracking-tighter leading-[5rem] max-md:leading-[3rem]">Hy! <span className="">I Am</span></h2>
                <h2 className="max-md:text-[2rem] capitalize font-ubuntu font-bold text-[60px] tracking-tight leading-[5rem] max-md:leading-[3rem] text-pictonBlue-500">{introDetail.intorName}</h2>
                <p className="mt-[1rem]">{introDetail.introDescription}</p>
                <button className="btn-primary capitalize hover:btn-primary-hover mt-[1rem]">Hire Me</button>
                <div className="text-4xl max-md:mt-[3rem] mt-[5rem] flex justify-start gap-[2rem]">
                    {
                        socialLinks.map((item, index) => {
                            return <motion.a
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={transition}
                                key={index} className="px-2 py-1 hover:scale-110 transition-all duration-75" href={item.link} target="_blank"><FontAwesomeIcon icon={item.img} className="text-pictonBlue-500" /></motion.a>
                        })
                    }
                </div>
            </div>
            <div className="max-md:w-full w-1/2 flex-1 flex justify-center items-center relative">
                <img src={myPic} className="rounded-full max-w-[90%] z-10" />
                <motion.img
                    initial={{ left: '-20%' }}
                    whileInView={{ left: 0 }}
                    transition={transition}
                    src={mustaches} className="absolute max-md:max-w-[10%] max-w-[10%] left-0 top-0 hover:scale-105 transition-all duration-75" />
                <motion.div
                    initial={{ opacity: 0, right: '-20%' }}
                    whileInView={{ opacity: 1, right: 0 }}
                    transition={transition}
                    className={`${theme == 'dark' && "text-codGray-500"} bg-gallary-500 flex ring-1 ring-pictonBlue-500 gap-[1rem] px-[1rem] py-[0.5rem] rounded-lg absolute -top-[2rem] -right-[2rem] z-10 shadow-2xl shadow-bitterSweet-500 hover:scale-105 transition-all duration-75`}>
                    <img src={introShowoffSkill[0].img} className="max-md:max-w-[30px] max-w-[50px]" />
                    <p className="capitalize max-md:text-sm">{introShowoffSkill[0].skill}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, left: '-20%' }}
                    whileInView={{ opacity: 1, left: 0 }}
                    transition={transition}
                    className={`${theme == 'dark' && "text-codGray-500"} bg-gallary-500  ring-1 ring-pictonBlue-500 flex gap-[1rem] px-[1rem] py-[0.5rem] rounded-lg absolute bottom-0 left-0 z-10 shadow-2xl shadow-bitterSweet-500 hover:scale-105 transition-all duration-75`}>
                    <img src={introShowoffSkill[1].img} className="max-md:max-w-[30px] max-w-[50px]" />
                    <p className="max-md:text-sm capitalize">{introShowoffSkill[1].skill}</p>
                </motion.div>
            </div>
        </section>

    )
}
