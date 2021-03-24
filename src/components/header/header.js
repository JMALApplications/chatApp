import React from 'react';
import { Link } from 'gatsby';

const Header = () => (

    <header className="top-0 .sticky bg-purple-900 text-white">

        <nav className="inline-block p-5">

            <Link to="/" className="float-left pr-10">Site Title</Link>
            <Link to="/about">About</Link>

        </nav>

    </header>

);

export default Header;
