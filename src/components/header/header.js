import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="sticky top-0 bg-purple-900 text-white z-50">
    <nav className="block p-5">
      <Link to="/" activeClassName="underline" className="float-left pr-10 hover:text-gray-200	">
        {siteTitle}
      </Link>
      <Link to="/about" activeClassName="underline" className="hover:text-gray-200">About</Link>
    </nav>
  </header>
)

export default Header
