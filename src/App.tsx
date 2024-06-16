import Contact from "./Components/Contact/Contact"
import Experience from "./Components/Experience/Experience"
import Intro from "./Components/Intro/Intro"
import Navbar from "./Components/NavBar/Navbar"
import Portfolio from "./Components/Portfolio/Portfolio"
import Services from "./Components/Services/Services"
import Testimonial from "./Components/Testimonial/Testimonial"
import Works from "./Components/Works/Works"
import { useThemeContext } from "./context/ThemeCintextProvider"


function App() {

  const theme = useThemeContext();

  return (
    <div className={`min-h-screen ${theme?.theme == 'light' ? "bg-gradient text-codGray-500" : "bg-codGray-500 text-gallary-500"} px-[3.5rem] max-conatiner  tracking-wide`}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App
