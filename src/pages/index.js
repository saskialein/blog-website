import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import classes from '../components/Layout.module.css'
// import Image from "../components/image"
import avatar from '../images/avataaars.png'
import githubIcon from '../images/github.svg'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
      <p>Welcome to my website.</p>
      <p>This is a blog of a future dev</p> */}
    <div className={classes.TextWrapper}>
      <h2 className={classes.MainTitle}>
        Hi people, <br />
        Welcome to my Blog.
      </h2>
        <p className={classes.MainDescription}>
            Lorem ipsum dolor sit...
        </p>
          <Link to='#'>
            <button className={classes.BtnBoost}>Get Started</button>
      </Link>
      </div>
          <div className={classes.ImgWrapper}>
            <img className={classes.FeatImg} style={{ width: '350px' }} src={avatar} alt='Avatar'/>
          </div>
          {/* <div>
            <Link to="https://github.com/saskialein" target="_blank"><img className={classes.GithubIcon} src={githubIcon} alt='Github icon with link to github profile'/></Link>
          </div> */}
  </Layout>
)

export default IndexPage
