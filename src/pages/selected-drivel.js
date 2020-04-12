import React from "react"

import Articles from "../components/articles/articles"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <Articles />
  </Layout>
)

export default ArticlesPage
