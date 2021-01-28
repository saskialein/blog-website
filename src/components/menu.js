import React from 'react'
import { Link } from "gatsby"

import SEO from "../components/seo"
import classes from './layout.module.css'

const Menu = () => (
    <nav className={classes.NavBar}>
        <div className={classes.NavBrand}>saskia</div>
            <ul className={classes.NavItems}>
                <Link className={classes.NavItemLink}  activeClassName={classes.Active} to='/'><li className={classes.NavItem}>.home()</li></Link>
                <Link className={classes.NavItemLink}  activeClassName={classes.Active} to='/about'><li className={classes.NavItem}>.about()</li></Link>
                <Link className={classes.NavItemLink}  activeClassName={classes.Active} to='/blog'><li className={classes.NavItem}>.blog()</li></Link>
                <Link className={classes.NavItemLink}  activeClassName={classes.Active} to='/contact'><li className={classes.NavItem}>.contact()</li></Link>
            </ul>
    </nav>
)

export default Menu