import React from 'react';

import classes from './NavItems.css';
import NavItem from './NavigationItem/NavItem';

const navItems = () => (
    <ul className={classes.NavigationItems}>
        <NavItem links="/">Burger Builder</NavItem>
        <NavItem links="/">Checkout</NavItem>        
        </ul>
);

export default navItems;