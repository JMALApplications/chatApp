import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="w-full text-center">
      <hr className="w-6/12 bg-gray-500 m-auto" />

      <nav className="block p-5 w-50">
        <Link to="/" className="pr-10">
          {siteTitle}
        </Link>
        <Link to="/about">About</Link>
      </nav>
    </footer>
  )
}

export default Footer
