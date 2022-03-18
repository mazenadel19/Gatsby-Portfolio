import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const Navbar = () => {
  /**
   * Component Query / Static Query
   * useStaticQuery can be used once inside a component
   * useStaticQuery may throw an error if component name is not starting with capital letter
   * you can use query variables with page queries only!
   **/

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar