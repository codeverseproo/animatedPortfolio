import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import wave from "../../assets/wave/wave.svg"
import { socialLinks, transitionConst } from "../../lib/appconst"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
            className="relative mt-[0rem] max-xl:mt-[0rem] max-md:mt-[2rem] flex justify-center items-center">
            <img src={wave} className="w-full" />
            <div className="absolute bottom-[5rem] max-xl:bottom-[2rem] max-lg:bottom-[1rem] flex flex-col justify-center items-center gap-[2rem] max-lg:gap-[1.5rem] max-md:gap-[0.5rem] my-auto">
                <a href="mailto:codeversepro@gmail.com" className="font-semibold text-lg">codeversepro@gmail.com</a>
                <div className="flex items-center gap-[2rem]">
                    {
                        socialLinks.map((item, index) => {
                            return <motion.a
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={transitionConst}
                                key={index} href={item.link} target="__blank" className="">
                                <FontAwesomeIcon icon={item.img} className=" text-4xl hover:scale-110 transition-all duration-100" />
                            </motion.a>
                        })
                    }
                </div>
            </div>
        </motion.footer>
    )
}
