import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavigationItems/NavItems'

const toolbar =() =>(
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo/>
        <nav>
            <NavItems/>
        </nav>

    </header>
);

export default toolbar;