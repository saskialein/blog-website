import React from "react"
import { Link } from "gatsby"

import {getWeather} from '../api/index'

import Layout from "../components/layout"
import SEO from "../components/seo"
import classes from '../components/Layout.module.css'
import avatar from '../images/avataaars.png'
import githubIcon from '../images/github.svg'


class IndexPage extends React.Component {

  render() {
    return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.TextWrapper}>
        <h2 className={classes.MainTitle}>
          Hi people, <br />
        Welcome to my Website.
      </h2>
        <p className={classes.MainDescription}>
            I am a Full-Stack Web Developer.
        </p>
        <Link to='#'>
          <button className={classes.BtnBoost}>Get Started</button>
        </Link>
      </div>
      <div className={classes.ImgWrapper}>
        <img className={classes.FeatImg} style={{ width: '350px' }} src={avatar} alt='Avatar' />
      </div>
      <div className={classes.IconWrapper}>
        <Link to="https://github.com/saskialein" target="_blank"><img className={classes.GithubIcon} src={githubIcon} alt='Github icon with link to github profile' /></Link>
      </div>
    </Layout>
  
    )
  }
}

export default IndexPage
