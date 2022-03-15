import { Link } from 'gatsby'
import React from "react"
import Layout from "../components/Layout"
//styles
// @ts-ignore
import { header,btn } from "../styles/home.module.css"

export default function Home() {

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web Developer Based in Egypt</p>
          <Link className={btn} to='/projects'>Projects</Link>
        </div>
      </section>
    </Layout>
  )
}
