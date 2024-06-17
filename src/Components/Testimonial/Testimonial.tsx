import { Swiper, SwiperSlide } from "swiper/react"
import { testimonial } from "../../lib/appconst"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { useThemeContext } from "../../context/ThemeCintextProvider"
import "../../styles/swiperCustome.css"

export default function Testimonial() {

    const theme = useThemeContext()?.theme

    return (
        <section className="py-[5rem] max-lg:py-[3rem]" id="testimonial">
            <div className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:text-center">
                <h3 className="font-ubuntu font-bold max-md:text-[2rem] text-[40px] capitalize tracking-tight leading-[3rem]">Clients always get <span className="text-pictonBlue-500">exceptional work</span> from me...</h3>
            </div>
            <div>
                <Swiper slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }} className="flex justify-center items-center my-[3rem] max-lg:my-[1rem]">
                    {
                        testimonial.map((item, index) => {
                            return <SwiperSlide key={index} className="flex justify-center items-center px-[1rem] max-md:px-[0.5rem] py-[3rem] max-md:py-[1.5rem]">
                                <div className="max-w-sm shadow-2xl shadow-bitterSweet-500 bg-gallary-500 px-[1rem] py-[0.5rem] rounded-lg flex flex-col gap-[2rem] max-md:gap-[1rem] items-center text-center cursor-pointer">
                                    <img src={item.clientImg} className="mt-[1rem] max-w-[10rem] max-md:max-w-[8rem] rounded-full" />
                                    <p className={`${theme == 'dark' && 'text-codGray-500'} mb-[1rem]`}>{item.review}</p>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}
