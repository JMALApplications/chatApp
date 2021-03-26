import React from 'react';
import { Link } from 'gatsby';

const Header = ({siteTitle}) => (

    <header className="sticky top-0 bg-purple-900 text-white">

        <nav className="block p-5">

            <Link to="/" className="float-left pr-10">{siteTitle}</Link>
            <Link to="/about">About</Link>

        </nav>

    </header>

);

export default Header;
