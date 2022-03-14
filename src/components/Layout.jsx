import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

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
