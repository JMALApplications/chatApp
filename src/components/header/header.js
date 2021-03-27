import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="sticky top-0 bg-purple-900 text-white z-50">
    <nav className="inline-block p-5">
      <Link to="/" className="m-auto pr-10 text-xl font-bold">
        {siteTitle}
      </Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
)

export default Header
