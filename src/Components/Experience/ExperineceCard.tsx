import { useState } from "react"

type TExperienceCard = {
    number: number,
    heading: string,
    subheading: string
}

export default function ExperineceCard({ number, heading, subheading }: TExperienceCard) {
    const [isMouseOver, setIsMouseOver] = useState(false)
    return (
        <div onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)} className="flex flex-col justify-center items-center gap-[1rem] text-center">
            <div className={`${isMouseOver && "rotate-[360deg]"} transition-all duration-700 rounded-full border-[0.5rem] w-[7rem] h-[7rem] flex justify-center items-center ${isMouseOver == true ? "border-s-pictonBlue-500 border-e-bitterSweet-500 border-t-pictonBlue-500 border-b-bitterSweet-500" : "border-s-bitterSweet-500 border-e-pictonBlue-500 border-t-bitterSweet-500 border-b-pictonBlue-500"}`}>
                <h3 className="font-ubuntu font-bold text-3xl">{number}+</h3>
            </div>

            <div>
                <h3 className="capitalize font-ubuntu font-bold text-lg">{heading}</h3>
                <p className="capitalize font-semibold text-pictonBlue-500 text-lg">{subheading}</p>
            </div>
        </div>
    )
}
