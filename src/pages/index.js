import React from "react"
// import Helmet from 'react-helmet'

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
          {/* <Helmet>
            <body className="root">
              <script type="text/javascript">{`
                var Tawk_API=Tawk_API||{ }, Tawk_LoadStart=new Date();
                (function(){
                  let s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0],
                  s1.async = true,
                  s1.src = 'https://embed.tawk.to/604541251c1c2a130d65f804/1f078cuue',
                  s1.charset = 'UTF-8',
                  s1.setAttribute('crossorigin', '*'),
                  s0.parentNode.insertBefore(s1, s0)
                })()`}
              </script>
              </body>
          </Helmet> */}
          <div className={classes.TextWrapper}>
            <h2 className={classes.MainTitle}>
              Hi people, <br />
                  Welcome to my Website.
                </h2>
            <p className={classes.MainDescription}>
              I am a Full-Stack Web Developer.
                  </p>
          </div>
          <div className={classes.ImgWrapper}>
            <img className={classes.FeatImg} loading="lazy" src={avatar} alt='Avatar' />
          </div>
          <div className={classes.IconWrapper}>
            <a href="https://github.com/saskialein" rel="noreferrer" target="_blank"><img className={classes.GithubIcon} loading="lazy" style={{ width: '45px' }} src={githubIcon} alt='Github icon with link to github profile' /></a>
          </div>
        </Layout>
        <Weather />

      </div>

    )
  }
}

export default IndexPage
