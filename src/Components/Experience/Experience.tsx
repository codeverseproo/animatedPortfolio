import { experience } from "../../lib/appconst";
import ExperineceCard from "./ExperineceCard";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <motion.section
            initial={{ y: 20, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
            className=" padding-x flex justify-around items-center gap-[5rem] py-[5rem] max-lg:py-[3rem] max-md:flex-wrap" id="experience">
            {
                experience.map((item, index) => {
                    return <ExperineceCard key={index} number={item.number} heading={item.heading} subheading={item.subheading} />
                })
            }
        </motion.section>
    )
}
