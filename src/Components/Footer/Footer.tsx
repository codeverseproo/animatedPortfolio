import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import wave from "../../assets/wave/wave.svg"
import { socialLinks } from "../../lib/appconst"

export default function Footer() {
    return (
        <footer className="relative mt-[0rem] max-xl:mt-[0rem] max-md:mt-[2rem] flex justify-center items-center">
            <img src={wave} className="w-full" />
            <div className="absolute bottom-[5rem] max-xl:bottom-[2rem] max-lg:bottom-[1rem] flex flex-col justify-center items-center gap-[2rem] max-lg:gap-[1.5rem] max-md:gap-[0.5rem] my-auto">
                <a href="mailto:codeversepro@gmail.com" className="font-semibold text-lg">codeversepro@gmail.com</a>
                <div className="flex items-center gap-[2rem]">
                    {
                        socialLinks.map((item, index) => {
                            return <a key={index} href={item.link} target="__blank" className="">
                                <FontAwesomeIcon icon={item.img} className="text-4xl hover:scale-110 transition-all duration-100" />
                            </a>
                        })
                    }
                </div>
            </div>
        </footer>
    )
}
