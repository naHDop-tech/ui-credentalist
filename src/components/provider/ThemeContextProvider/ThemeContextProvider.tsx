import React, { PropsWithChildren, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ColorModeContext } from "@root/context/theme";

export function ThemeContextProvider(props: PropsWithChildren<Record<string, never>>) {
    const { children } = props
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}