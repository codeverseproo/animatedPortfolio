import ServicesCard from "./ServicesCard";

import { services, transitionConst } from "../../lib/appconst";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Services() {
    const [currentServie, setCurrentService] = useState(0)
    const transition = transitionConst;


    return (
        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
            className="padding-x py-[5rem] max-lg:py-[3rem] flex justify-center max-lg:flex-col max-lg:gap-[5rem]" id="services">
            <div className="flex-1 max-lg:flex max-lg:flex-col justify-center items-center max-lg:text-center">
                <h2 className="font-ubuntu max-md:text-[2rem] max-md:leading-[3rem] font-bold text-[60px] leading-[5rem] tracking-tight">My awesome</h2>
                <h2 className="font-ubuntu max-md:text-[2rem] max-md:leading-[3rem] font-bold text-[60px] leading-[5rem] text-pictonBlue-500 tracking-tight">Services</h2>
                <p className="mt-[1rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum, ex unde sint enim deserunt necessitatibus distinctio ducimus voluptas fugit debitis fuga, consequuntur tempora iure reiciendis. Sapiente omnis consequuntur dicta!</p>
                <button className="mt-[5rem] max-lg:mt-[3rem]"><a className="btn-primary hover:btn-primary-hover">Download CV</a></button>
            </div>
            <motion.div
                initial={{ right: '-50%' }}
                whileInView={{ right: 0 }}
                transition={transition}
                className="flex-1 flex flex-col justify-center items-center gap-[2rem]">
                <ServicesCard cardDetail={services[currentServie].discription} cardHeading={services[currentServie].heading} cardLink={services[currentServie].link} img={services[currentServie].img} className={""} />
                <motion.div
                    initial={{ right: '-50%', opacity: 0 }}
                    whileInView={{ right: 0, opacity: 1 }}
                    transition={transition}
                    className="flex gap-[1rem] text-2xl text-pictonBlue-500">
                    {
                        services.map((item, index) => {
                            return <FontAwesomeIcon onClick={() => setCurrentService(index)} icon={faCircle} key={item.heading} className={`${index == currentServie && "text-bitterSweet-500"} transition-all duration-100 cursor-pointer`} />
                        })
                    }
                </motion.div>


            </motion.div>
        </motion.section>
    )
}
