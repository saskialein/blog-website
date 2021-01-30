import React from "react"
import PropTypes from "prop-types"

import Menu from "../components/menu"

import "../styles/global.css"
import classes from './Layout.module.css'

const Layout = ({ children }) => {

  return (
    <div className={classes.Container}> 
      <div className={classes.Glass}>
        <Menu/>
          <main className={classes.Main}>
            {children}
          </main>
      </div>   
    </div>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout