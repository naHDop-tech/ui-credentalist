import { memo, PropsWithChildren, useState } from 'react';
import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { AccountCircle } from "@mui/icons-material";
import { ThemeToggle } from "@components/ThemeToggle";
import MenuIcon from '@mui/icons-material/Menu';


const Layout = memo(function layoutRender(props: PropsWithChildren<{}>) {
    const { children } = props
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isAuth = true

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
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
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Credentalist
                    </Typography>
                    {isAuth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <ThemeToggle />
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={!!anchorEl}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
})

export default Layout;