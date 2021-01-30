const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'global.GENTLY': false
      })
    ]
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
    
  const postTemplate = path.resolve('./src/templates/blogTemplate.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
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
`).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: postTemplate
          })
        })
    })
}
