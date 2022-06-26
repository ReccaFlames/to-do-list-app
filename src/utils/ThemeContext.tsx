import { createContext } from 'react';

export type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    // eslint-disable-next-line
    setTheme: (_theme) => console.warn('no theme provider'),
});