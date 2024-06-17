/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"

const themeContext = createContext<null | TValue>(null)

type TValue = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    themeClassLight: string,
    themeClassDark: string
}

export default function ThemeCintextProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState(localStorage.getItem("localTheme") || "light")

    useEffect(() => {

        localStorage.setItem("localTheme", theme)

    }, [theme])

    const value = {
        theme,
        setTheme,
        themeClassLight: "themeClassLight",
        themeClassDark: "themeClassDark"
    }

    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    )
}


export function useThemeContext() {
    const themeContextt = useContext(themeContext)

    return themeContextt

}