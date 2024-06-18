import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbar, yourName } from "../../lib/appconst";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../context/ThemeCintextProvider";
import { Link } from "react-scroll"

// import moonIcon from "../../assets/icons/moon-solid.svg"

export default function Navbar() {

    const themeContext = useThemeContext();

    return (
        <nav className="padding-x flex justify-between py-[2rem] font-ubuntu">
            <div className="flex justify-center gap-[2rem] items-center max-md:flex-col max-md:flex-1">
                <a href="/">
                    <h1 className="max-md:text-[2rem] max-sm:text-[2rem] font-bold text-3xl leading-[1.3rem] tracking-tight uppercase">{yourName}</h1>
                </a>
                <div>
                    <div className="ring-4 ring-pictonBlue-500 px-[0.5rem] py-[0.25rem] rounded-full flex items-center gap-[0rem]">
                        <FontAwesomeIcon onClick={() => themeContext?.setTheme('dark')} icon={faMoon} className={`${themeContext!.theme == 'dark' && themeContext?.themeClassDark} transition-all duration-300 px-[0.5rem] py-[0.25rem] cursor-pointer`} />
                        <FontAwesomeIcon onClick={() => themeContext?.setTheme('light')} icon={faSun} className={`${themeContext?.theme == 'light' && themeContext.themeClassLight} transition-all duration-300 px-[0.5rem] py-[0.25rem] cursor-pointer`} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-[2rem] max-md:hidden">
                <ul className="max-lg:hidden flex justify-center items-center gap-[2rem] text-lg capitalize">
                    {
                        navbar.map((item, index) => {
                            return <li key={index}><Link spy={true} to={item.link} smooth={true} className="cursor-pointer px-[0.5rem] py-[0.5rem] hover:text-pictonBlue-500 transition-all duration-75">{item.label}</Link></li>
                        })
                    }
                </ul>
                <Link spy smooth to="contact"><button className="btn-primary hover:btn-primary-hover">Contact</button></Link>
            </div>
        </nav>
    )
}
