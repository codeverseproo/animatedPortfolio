import { Swiper, SwiperSlide } from "swiper/react";

import { projects } from "../../lib/appconst"

export default function Portfolio() {
    return (
        <section className="py-[5rem]" id="portfolio">
            <div className="">
                <h3 className="font-ubuntu font-bold text-[40px] tracking-tight leading-[3rem]">Recent Projects</h3>
                <h3 className="font-ubuntu font-bold text-[40px] text-pictonBlue-500 tracking-tight leading-[3rem]">Portfolio</h3>

            </div>
            <div className="flex justify-center items-center">
                <Swiper slidesPerView={3} spaceBetween={30} grabCursor={true} className="mt-[2rem] flex justify-center items-center">
                    {
                        projects.map((item, index) => {
                            return <SwiperSlide key={index} className="flex justify-center items-center"><a href={item.link}><img src={item.projectImg} className="max-w-[25rem] rounded-lg shadow-2xl shadow-bitterSweet-500 hover:scale-105 transition-all duration-100" /></a></SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}