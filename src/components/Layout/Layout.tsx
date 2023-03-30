import { memo, PropsWithChildren, useState, MouseEvent } from 'react';
import { AppBar, Box, Toolbar } from "@mui/material";


import { ThemeToggle } from "@components/ThemeToggle";
import { AppBarUserMenu } from "@components/AppBarUserMenu";
import {AppBarMenu} from "@components/AppBarMenu";

const Layout = memo(function layoutRender(props: PropsWithChildren<{}>) {
    const { children } = props
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isAuth = true

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (id?: string) => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            <AppBar color="default" position="static">
                <Toolbar>
                    <AppBarMenu />
                    {isAuth && (
                        <div>
                            <AppBarUserMenu menuHandler={handleMenu} anchor={anchorEl} closeHandler={handleClose} />
                            <ThemeToggle />
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
})

export default Layout;