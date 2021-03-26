import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import { graphql, StaticQuery } from "gatsby"

const Layout = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Footer siteTitle={data.site.siteMetadata.title} />
          {props.children}
        </div>
      )}
    />
  )
}

export default Layout
