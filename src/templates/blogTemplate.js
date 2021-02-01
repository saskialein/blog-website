import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import classes from './BlogTemplate.module.css'

export default function Template({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
          <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          <div className={classes.BtnWrapper}>    
            <Link to='/blog' >
              <button className={classes.BtnBack}><span className={classes.BtnText}>Back to post overview</span></button>
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`