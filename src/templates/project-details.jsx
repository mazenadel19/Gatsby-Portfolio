import Layout from '../components/Layout'
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// @ts-ignore
import * as styles from "../styles/project-details.module.css"


export default function ProjectDetails({ data }){

  const { html, frontmatter } = data.markdownRemark
  const { title, stack, featured } = frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(featured.childImageSharp.gatsbyImageData)}
            alt="Banner"
          />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}


export const query = graphql`
  query ProjectDetails($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        featured {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
              formats: AUTO
            )
          }
        }
      }
    }
  }
`
