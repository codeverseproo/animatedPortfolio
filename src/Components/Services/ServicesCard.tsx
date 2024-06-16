import { useThemeContext } from "../../context/ThemeCintextProvider"

type TCard = {
    img: string,
    cardHeading: string,
    cardDetail: string,
    cardLink: string
    className?: string
}

export default function ServicesCard({ img, cardHeading, cardDetail, cardLink, className }: TCard) {
    const theme = useThemeContext()?.theme;
    return (
        <div className={`${theme == 'dark' && 'text-codGray-500'} hover:scale-105 transition-all duration-100 shadow-2xl shadow-bitterSweet-500 text-center bg-gallary-500 px-[2rem] py-[1rem] rounded-lg flex flex-col justify-center items-center gap-[1rem] ring-4 ring-pictonBlue-500 max-w-[400px] min-w-[10rem] min-h-[13rem] ${className}`}>
            <img src={img} className="max-w-[50px]" />
            <h3 className="font-ubuntu font-semibold text-lg">{cardHeading}</h3>
            <p className="max-w-sm">{cardDetail}</p>
            <button className="btn-secondary hover:btn-secondary-hover"><a href={cardLink}>LearnMore</a></button>
        </div>
    )
}
