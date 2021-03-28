import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Header = ({ siteTitle }) => (
  <header className="sticky top-0 bg-purple-900 text-white z-50">
    <nav className="container md:inline-block pt-5 pb-5 px-8 mx-auto">
      <div className="grid grid-cols-8 md:inline-block">
        <div>
          <StaticImage 
            src="../../assets/images/menu-icon.svg" 
            alt="menu icon"
            className="md:hidden"
            style={{maxWidth: "30px"}}
          />
        </div>
        <div className="text-center mx-auto md:m-auto col-span-6 md:inline-block">
          <Link to="/" className="md:text-left md:pr-10 text-xl font-bold">
            {siteTitle}
          </Link>
        </div>
        <div className="hidden text-center col-span-6 md:inline-block md:m-auto text-lg">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
