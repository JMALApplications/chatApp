import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="w-full text-center">
      <hr className="w-6/12 bg-gray-500 m-auto" />

      <nav className="block p-5 w-50">
        <Link to="/" activeClassName="border-b-2 border-black" className="mr-10 hover:text-gray-700">
          {siteTitle}
        </Link>
        <Link activeClassName="border-b-2 border-black" className="hover:text-gray-700" to="/about">About</Link>
      </nav>
    </footer>
  )
}

export default Footer
