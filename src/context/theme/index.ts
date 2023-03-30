import { createContext } from "react";

interface ThemeContext {
    toggleColorMode: () => void
}

export const ColorModeContext = createContext<ThemeContext>({ toggleColorMode: () => {} });