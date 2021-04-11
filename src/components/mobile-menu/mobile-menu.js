import React from "react"
import { Link } from "gatsby"
import "./mobile-menu.css"

const MobileMenu = (props) => (
    <div>
        <div className={props.darkOverlayClassName}></div>
        <div className={props.menuClassName}>
            <button onClick={props.onClick} className="float-right mt-3 mr-5 font-bold text-xl bg-purple-900 pt-1 pb-1 px-2">
                &#88;
            </button>
            <nav className="p-5">
            <Link to="/" activeClassName="font-bold" className="text-lg flex p-2">Home</Link>
            <Link to="/about" activeClassName="font-bold" className="text-lg flex p-2 mt-3">About</Link>
            </nav>
        </div>
    </div>
)

export default MobileMenu