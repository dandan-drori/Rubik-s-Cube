import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <Link to="/">Easy<span className='logo-span'>Rubik</span></Link>
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-links">Solving Methods</Link>
                    <ul className="dropdown">
                        <li>
                            <Link to="/">Beginner's Method</Link>    
                        </li> 
                        <li>
                            <Link to="/">CFOP</Link>
                        </li> 
                        <li>
                            <Link to="/">ZZ</Link>
                        </li> 
                        <li>
                            <Link to="/">Roux</Link>
                        </li> 
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/useful-links" className="nav-links">Useful Links</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-links">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
