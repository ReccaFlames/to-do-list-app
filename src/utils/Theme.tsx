import { useContext } from "react"
import { ThemeProvider } from "styled-components";
import { dark, GlobalStyles, light } from "./globalStyles";
import { ThemeContext } from "./ThemeContext"

const Theme = ({ children }: { children: React.ReactNode }) => {
    const {theme} = useContext(ThemeContext);
    const themeMode = theme === "light" ? light : dark;

    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}

export default Theme;