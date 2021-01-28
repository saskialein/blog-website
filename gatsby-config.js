const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = args => {
  const { actions, node } = args
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

module.exports = {
  siteMetadata: {
    title: `Saskia's Website`,
    description: `A little blog about my progress as a Web Developer`,
    author: `Saskia Leinberger`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: 'markdown-pages'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-openweathermap`,
    //   options: {
    //     apikey: 'ebfbb04818fee9523dfbe461b9445a30',
    //     q: 'Wellington',
    //     units: 'metric',
    //     type: 'forecast'
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
