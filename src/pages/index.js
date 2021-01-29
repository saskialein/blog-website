import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Weather from '../components/weather'
import classes from '../components/Layout.module.css'
import avatar from '../images/avataaars.png'
import githubIcon from '../images/github.svg'


class IndexPage extends React.Component {

  render() {
    return (
      <div> 
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
                  {/* <Link to='#'>
                    <button className={classes.BtnBoost}>Get Started</button>
                  </Link> */}
              </div>
              <div className={classes.ImgWrapper}>
                <img className={classes.FeatImg} loading="lazy" style={{ width: '350px' }} src={avatar} alt='Avatar' />
              </div>
              <div className={classes.IconWrapper}>
                <a href="https://github.com/saskialein" rel="noreferrer" target="_blank"><img className={classes.GithubIcon} loading="lazy" style={{width: '45px'}} src={githubIcon} alt='Github icon with link to github profile'/></a>
              </div>
        </Layout>
        <Weather />
      </div>
    )
  }
}

export default IndexPage
