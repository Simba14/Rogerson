const path = require(`path`)
const {
  articles,
  subpath,
} = require("./src/components/articles/articlesContent")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/components/article/article.jsx`)

  articles.forEach(article => {
    createPage({
      path: `${subpath}/${article.slug}`,
      component: articleTemplate,
      context: {
        article,
      },
    })
  })
}
