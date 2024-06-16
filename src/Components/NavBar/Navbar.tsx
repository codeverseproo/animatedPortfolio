import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbar, yourName } from "../../lib/appconst";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../context/ThemeCintextProvider";

// import moonIcon from "../../assets/icons/moon-solid.svg"

export default function Navbar() {

    const themeContext = useThemeContext();

    return (
        <nav className="flex justify-between py-[2rem] font-ubuntu">
            <div className="flex justify-center gap-[2rem] items-center">
                <h1 className="font-bold text-3xl leading-[1.3rem] tracking-tight uppercase">{yourName}</h1>
                <div>
                    <div className="ring-4 ring-pictonBlue-500 px-[0.5rem] py-[0.25rem] rounded-full flex items-center gap-[0rem]">
                        <FontAwesomeIcon onClick={() => themeContext?.setTheme('dark')} icon={faMoon} className={`${themeContext!.theme == 'dark' && themeContext?.themeClassDark} transition-all duration-300 px-[0.5rem] py-[0.25rem] cursor-pointer`} />
                        <FontAwesomeIcon onClick={() => themeContext?.setTheme('light')} icon={faSun} className={`${themeContext?.theme == 'light' && themeContext.themeClassLight} transition-all duration-300 px-[0.5rem] py-[0.25rem] cursor-pointer`} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-[2rem]">
                <ul className="flex justify-center items-center gap-[2rem] text-lg capitalize">
                    {
                        navbar.map((item, index) => {
                            return <li key={index}><a href={item.link} className="px-[0.5rem] py-[0.5rem] hover:text-pictonBlue-500 transition-all duration-75">{item.label}</a></li>
                        })
                    }
                </ul>
                <a href="#contact"><button className="btn-primary hover:btn-primary-hover">Contact</button></a>
            </div>
        </nav>
    )
}
