import { useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeStore = ({ children } : { children: React.ReactNode }) => {

    const [theme, setTheme] = useState("light");

    const setMode = (mode: string) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme ? setTheme(localTheme) : setMode("light")
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeStore;