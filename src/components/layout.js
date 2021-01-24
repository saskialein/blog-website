import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "../components/menu"
import "./layout.css"
import classes from './Layout.module.css'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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