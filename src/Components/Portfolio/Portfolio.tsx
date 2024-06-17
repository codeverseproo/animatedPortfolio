import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"

import { projects } from "../../lib/appconst"

export default function Portfolio() {
    return (
        <section className="padding-x py-[5rem] max-lg:py-[5rem]" id="portfolio">
            <div className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
                <h3 className="font-ubuntu font-bold max-md:text-[2rem] max-md:leading-[3rem] text-[40px] tracking-tight leading-[3rem]">Recent Projects</h3>
                <h3 className="font-ubuntu font-bold max-md:text-[2rem] max-md:leading-[3rem] text-[40px] text-pictonBlue-500 tracking-tight leading-[3rem]">Portfolio</h3>

            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
                className="flex justify-center items-center">
                <Swiper slidesPerView={3} spaceBetween={30} grabCursor={true} className="mt-[2rem] flex justify-center items-center">
                    {
                        projects.map((item, index) => {
                            return <SwiperSlide key={index} className="flex justify-center items-center"><a href={item.link}><img src={item.projectImg} className="max-w-[25rem] max-md:max-w-[20rem] max-lg:max-w-[30rem] rounded-lg shadow-2xl shadow-bitterSweet-500 hover:scale-105 transition-all duration-100" /></a></SwiperSlide>
                        })
                    }
                </Swiper>
            </motion.div>
        </section>
    )
}
