import React, { memo, MouseEvent, useState } from 'react';
import { Toolbar, AppBar as Bar, Link } from "@mui/material";
import { Login } from "@mui/icons-material";

import { AppBarMenu } from "@components/AppBarMenu";
import { AppBarUserMenu } from "@components/AppBarUserMenu";
import { ThemeToggle } from "@components/ThemeToggle";

function renderAppBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const isAuth = false

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (id?: string) => {
        setAnchorEl(null)
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
                        <Link href="login"><Login /></Link>
                    </div>
                )}
            </Toolbar>
        </Bar>
    );
}

export const AppBar = memo(renderAppBar);