import React from "react";
import { Link } from "gatsby";


const Footer = ({siteTitle}) => {

    return (

        <footer className="absolute w-100 bottom-0 w-full text-center">

            <hr className="w-6/12 bg-gray-500 m-auto" />

            <nav className="block p-5 w-50">

                <Link href="/" className="pr-10">{siteTitle}</Link>
                <Link href="/about">About</Link>

            </nav>

        </footer>

    );

}

export default Footer;