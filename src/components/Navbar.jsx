import { Link } from "gatsby"
import React from "react"

const Navbar = () => (
  <nav>
    <h1>Gatsby Portfolio</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </div>
  </nav>
)

export default Navbar
