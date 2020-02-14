import React from 'react';
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => (
    <AppBar style={{ position: 'relative' }}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
);

export default Header;
