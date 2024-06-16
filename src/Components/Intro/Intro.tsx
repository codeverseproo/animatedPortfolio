import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { introDetail, introShowoffSkill, socialLinks } from "../../lib/appconst";
import myPic from "../../assets/self/self no bg.png"
import mustaches from "../../assets/icons/mustches.svg"
import { useThemeContext } from "../../context/ThemeCintextProvider";

export default function Intro() {

    const theme = useThemeContext()?.theme;

    return (
        <section className="flex justify-center items-center py-[4rem]">
            <div className="w-1/2">
                <h2 className="capitalize font-ubuntu font-bold text-[60px] tracking-tighter leading-[5rem]">Hy! <span className="">I Am</span></h2>
                <h2 className="capitalize font-ubuntu font-bold text-[60px] tracking-tight leading-[5rem] text-pictonBlue-500">{introDetail.intorName}</h2>
                <p className="mt-[1rem]">{introDetail.introDescription}</p>
                <button className="btn-primary capitalize hover:btn-primary-hover mt-[1rem]">Hire Me</button>
                <div className="text-4xl mt-[5rem] flex justify-start gap-[2rem]">
                    {
                        socialLinks.map((item, index) => {
                            return <a key={index} className="px-2 py-1 hover:scale-110 transition-all duration-75" href={item.link} target="_blank"><FontAwesomeIcon icon={item.img} className="text-pictonBlue-500" /></a>
                        })
                    }
                </div>
            </div>
            <div className="w-1/2 flex-1 flex justify-center items-center relative">
                <img src={myPic} className="rounded-full max-w-[90%] z-10" />
                <img src={mustaches} className="absolute max-w-[10%] left-0 top-0 hover:scale-105 transition-all duration-75" />
                <div className={`${theme == 'dark' && "text-codGray-500"} bg-gallary-500 flex ring-1 ring-pictonBlue-500 gap-[1rem] px-[1rem] py-[0.5rem] rounded-lg absolute top-0 right-0 z-10 shadow-2xl shadow-bitterSweet-500 hover:scale-105 transition-all duration-75`}>
                    <img src={introShowoffSkill[0].img} className="max-w-[50px]" />
                    <p className="capitalize">{introShowoffSkill[0].skill}</p>
                </div>
                <div className={`${theme == 'dark' && "text-codGray-500"} bg-gallary-500  ring-1 ring-pictonBlue-500 flex gap-[1rem] px-[1rem] py-[0.5rem] rounded-lg absolute bottom-0 left-0 z-10 shadow-2xl shadow-bitterSweet-500 hover:scale-105 transition-all duration-75`}>
                    <img src={introShowoffSkill[1].img} className="max-w-[50px]" />
                    <p className="capitalize">{introShowoffSkill[1].skill}</p>
                </div>
            </div>
        </section>

    )
}
