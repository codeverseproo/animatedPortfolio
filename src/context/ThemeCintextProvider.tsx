/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"

const themeContext = createContext<null | TValue>(null)

type TValue = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    themeClassLight: string,
    themeClassDark: string
}

export default function ThemeCintextProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState("light")

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