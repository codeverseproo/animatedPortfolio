import { experience } from "../../lib/appconst";
import ExperineceCard from "./ExperineceCard";

export default function Experience() {
    return (
        <section className="flex justify-around items-center gap-[5rem] py-[5rem]" id="experience">
            {
                experience.map((item, index) => {
                    return <ExperineceCard key={index} number={item.number} heading={item.heading} subheading={item.subheading} />
                })
            }
        </section>
    )
}