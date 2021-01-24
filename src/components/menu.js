import React from 'react'
import { Link } from "gatsby"
import classes from './layout.module.css'

const Menu = () => (
    <nav className={classes.NavBar}>
        <div className={classes.NavBrand}>Hello</div>
            <ul className={classes.NavItems}>
                <Link className={classes.NavItemLink} to='/'><li className={classes.NavItem}>Home</li></Link>
                <Link className={classes.NavItemLink} to='/about'><li className={classes.NavItem}>About</li></Link>
                <Link className={classes.NavItemLink} to='/blog'><li className={classes.NavItem}>Blog</li></Link>
                <Link className={classes.NavItemLink} to='contact'><li className={classes.NavItem}>Contact</li></Link>
            </ul>
    </nav>
    )

export default Menu