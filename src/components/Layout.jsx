import React from "react"
//Components
import Footer from "./Footer"
import Navbar from "./Navbar"
// Global Styles
import "../styles/global.css"

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="content">
      <main>{children}</main>
    </div>
    <Footer />
  </div>
)

export default Layout
