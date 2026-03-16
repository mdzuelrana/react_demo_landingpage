import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-black">eBuy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                        <summary>Products</summary>
                        <ul className="p-2 bg-base-100 w-40 z-1">
                            <li><a>Payments</a></li>
                            <li><a>Revenue</a></li>
                            <li><a>Money Management</a></li>
                            <li><a>Platforms and Marketplaces</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Solutions</summary>
                        <ul className="p-2 bg-base-100 w-40 z-1">
                            <li><a>By Stage</a></li>
                            <li><a>By Use Case</a></li>
                            <li><a>By Industry</a></li>
                            <li><a>Ecosystem</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Developers</summary>
                        <ul className="p-2 bg-base-100 w-40 z-1">
                            <li><a>Documentation</a></li>
                            <li><a>Guides</a></li>
                            <li><a>Resources</a></li>
                            
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Resources</summary>
                        <ul className="p-2 bg-base-100 w-40 z-1">
                            <li><a>Learn</a></li>
                            <li><a>Support</a></li>
                            <li><a>Company</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Pricing</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-6">
                <Link to="/signin" className="btn">Sign In</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
            </div>
            
            </div>
    );
};

export default Navbar;