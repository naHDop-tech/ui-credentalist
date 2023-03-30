import { memo, PropsWithChildren, useState, MouseEvent } from 'react';
import { Login } from "@mui/icons-material"
import { AppBar, Box, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";

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
    
    const loginHandler = () => {
        //
    }

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
                    {isAuth ? (
                        <div>
                            <AppBarUserMenu menuHandler={handleMenu} anchor={anchorEl} closeHandler={handleClose} />
                            <ThemeToggle />
                        </div>
                    ) : <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={loginHandler}
                            color="inherit"
                        >
                            <Login />
                        </IconButton>
                    </div>}
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
})

export default Layout;