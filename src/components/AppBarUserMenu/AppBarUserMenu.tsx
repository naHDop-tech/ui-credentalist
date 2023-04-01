import React, { memo, MouseEvent } from 'react';
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";

export interface AppBarUserMenuProps {
    menuHandler: (event: MouseEvent<HTMLElement>) => void
    closeHandler: (id?: string) => void
    anchor: null | HTMLElement
}

export const AppBarUserMenu = memo(function renderAppBarUserMenu(props: AppBarUserMenuProps) {
    const { anchor, closeHandler, menuHandler } = props
    
    const onCloseHandler = (id?: string) => {
        closeHandler(id)
    }

    return (
        <>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={menuHandler}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={!!anchor}
                onClose={onCloseHandler}
            >
                <MenuItem onClick={() => onCloseHandler("1")}>Profile</MenuItem>
                <MenuItem onClick={() => onCloseHandler("2")}>My account</MenuItem>
            </Menu>
        </>
    );
})
