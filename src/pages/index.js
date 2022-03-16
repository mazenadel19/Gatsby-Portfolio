import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
//styles
// @ts-ignore
import { btn, header } from "../styles/home.module.css"

export default function Home({ data }) {

// const { description, title } = data.site.siteMetadata

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer Based in Egypt</p>
          <Link className={btn} to="/projects">
            Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

/////// Page Query ///////
// export const query = graphql`
//   {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `
