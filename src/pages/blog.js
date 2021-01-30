import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import classes from './Blog.module.css'

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <div>
    <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                  <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>  
                  <br />
            <br />
            <div className={classes.BtnWrapper}>
                  <Link to={post.node.frontmatter.path} className={classes.Link}> <button className={classes.BtnRead}>Read more</button></Link>
              </div>   
              <br />
                  <br />
                  <hr />
            </div>
    ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
        query BlogIndexQuery {
            allMarkdownRemark {
              edges {
               node {
                id
                frontmatter {
                  path
                  title
                  date
                  author
                 }
             }
            }
           }
        } 
`

export default BlogPage