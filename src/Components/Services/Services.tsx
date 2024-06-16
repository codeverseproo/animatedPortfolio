import ServicesCard from "./ServicesCard";

import { services } from "../../lib/appconst";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "swiper/css";

export default function Services() {
    const [currentServie, setCurrentService] = useState(0)



    return (
        <section className="py-[5rem] flex justify-center" id="services">
            <div className="flex-1">
                <h2 className="font-ubuntu font-bold text-[60px] leading-[5rem] tracking-tight">My awesome</h2>
                <h2 className="font-ubuntu font-bold text-[60px] leading-[5rem] text-pictonBlue-500 tracking-tight">Services</h2>
                <p className="mt-[1rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum, ex unde sint enim deserunt necessitatibus distinctio ducimus voluptas fugit debitis fuga, consequuntur tempora iure reiciendis. Sapiente omnis consequuntur dicta!</p>
                <button className="mt-[5rem]"><a className="btn-primary hover:btn-primary-hover">Download CV</a></button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-[2rem]">
                <ServicesCard cardDetail={services[currentServie].discription} cardHeading={services[currentServie].heading} cardLink={services[currentServie].link} img={services[currentServie].img} className={""} />
                <div className="flex gap-[1rem] text-2xl text-pictonBlue-500">
                    {
                        services.map((item, index) => {
                            return <FontAwesomeIcon onClick={() => setCurrentService(index)} icon={faCircle} key={item.heading} className={`${index == currentServie && "text-codGray-500"} transition-all duration-100 cursor-pointer`} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
