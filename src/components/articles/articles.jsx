import React from "react"
import { Link } from "gatsby"
import { articles, subpath } from "./articlesContent"

import "./articles.scss"

const Articles = () => {
  return (
    <div className="Articles">
      {articles.map(article => (
        <div key={article.title} className={"Article"}>
          {article.slug ? (
            <Link className="Title" to={`${subpath}/${article.slug}`}>
              <div>{article.title}</div>
            </Link>
          ) : (
            <a className="Title" target="_blank" href={article.link}>
              {article.title}
            </a>
          )}

          <div className="Format">{article.format}</div>
          <div className="Date">{article.date}</div>
        </div>
      ))}
    </div>
  )
}

export default Articles
