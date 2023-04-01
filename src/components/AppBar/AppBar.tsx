import React, { memo, MouseEvent, useState } from 'react';
import { Toolbar, AppBar as Bar } from "@mui/material";
import { AppBarMenu } from "@components/AppBarMenu";
import { AppBarUserMenu } from "@components/AppBarUserMenu";
import { ThemeToggle } from "@components/ThemeToggle";
import IconButton from "@mui/material/IconButton";
import { Login } from "@mui/icons-material";

function renderAppBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const isAuth = true

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (id?: string) => {
        setAnchorEl(null)
    }

    const loginHandler = () => {
        //
    }
    return (
        <Bar color="default" position="static">
            <Toolbar>
                <AppBarMenu />
                {isAuth ? (
                    <div>
                        <AppBarUserMenu
                            menuHandler={handleMenu}
                            anchor={anchorEl}
                            closeHandler={handleClose}
                        />
                        <ThemeToggle />
                    </div>
                ) : (
                    <div>
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
                    </div>
                )}
            </Toolbar>
        </Bar>
    );
}

export const AppBar = memo(renderAppBar);