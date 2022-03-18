import { graphql, Link } from 'gatsby'
import React from "react"
import Layout from "../../components/Layout"
//styles
// @ts-ignore
import { projects_style , portfolio } from "../../styles/portfolio.module.css"

const index = ({ data }) => {


  const projects = data.projects.nodes
  const {contact} = data.contact.siteMetadata


  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects_style}>
          {projects.map(project => {
            const { title, stack, slug, date, featuredImg, thumb} = project.frontmatter

            return (
              <Link key={project.id} to={`/projects/${slug}`}>
                <h3>{title}</h3>
                <p>{stack}</p>
                <p>
                  {new Date(date).toDateString()}
                </p>
              </Link>
            )
          })}
        </div>
        <p>Like what u see? Email me at {contact} for a quote</p>
      </div>
    </Layout>
  )
}

export default index

//exports page query
export const query = graphql`
  query ProjectsPage {
   projects : allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          stack
          slug
          date
          featuredImg
          thumb
        }
      }
    }
   contact:  site {
      siteMetadata {
        contact
      }
    }
  }
`