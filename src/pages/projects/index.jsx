import React from "react"
import Layout from "../../components/Layout"
//styles
// @ts-ignore
import { portfolio } from "../../styles/portfolio.module.css"

const index = () => (
  <Layout>
    <div className={portfolio}>
      <h2>Portfolio</h2>
      <h3>Projects & Websites I've Created</h3>
    </div>
  </Layout>
)

export default index
