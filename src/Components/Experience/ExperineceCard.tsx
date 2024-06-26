import { useState } from "react"
import { motion } from "framer-motion"
import { transitionConst } from "../../lib/appconst"

type TExperienceCard = {
    number: number,
    heading: string,
    subheading: string
}

export default function ExperineceCard({ number, heading, subheading }: TExperienceCard) {
    const [isMouseOver, setIsMouseOver] = useState(false)
    return (
        <div onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)} className="flex flex-col justify-center items-center gap-[1rem] text-center">
            <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                transition={transitionConst}
                className={`${isMouseOver && "rotate-[360deg]"} transition-all duration-700 rounded-full border-[0.5rem] w-[7rem] max-lg:w-[6rem] h-[7rem] max-lg:h-[6rem] flex justify-center items-center ${isMouseOver == true ? "border-s-pictonBlue-500 border-e-bitterSweet-500 border-t-pictonBlue-500 border-b-bitterSweet-500" : "border-s-bitterSweet-500 border-e-pictonBlue-500 border-t-bitterSweet-500 border-b-pictonBlue-500"}`}>
                <h3 className="font-ubuntu font-bold text-3xl max-lg:text-2xl">{number}+</h3>
            </motion.div>

            <div>
                <h3 className="capitalize font-ubuntu font-bold text-lg max-lg:text-md">{heading}</h3>
                <p className="capitalize font-semibold text-pictonBlue-500 text-lg max-lg:text-md">{subheading}</p>
            </div>
        </div>
    )
}
