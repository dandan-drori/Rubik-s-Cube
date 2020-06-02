import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenNav = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <nav className="navbar">
            <div className="logo-list-container">
            <div className="logo">
                <Link to="/">Easy<span className='logo-span'>Rubik</span></Link>
            </div>
            <ul className={isOpen ? "nav-list open" : "nav-list"}>
                <li className="nav-item">
                    <Link to="/solving-methods" className="nav-links">Solving Methods</Link>
                    <ul className="dropdown">
                        <li>
                            <Link to="/solving-methods/beginner's-method">Beginner's Method</Link>    
                        </li> 
                        <li>
                            <Link to="/solving-methods/cfop">CFOP</Link>
                        </li> 
                        <li>
                            <Link to="/solving-methods/zz">ZZ</Link>
                        </li> 
                        <li>
                            <Link to="/solving-methods/roux">Roux</Link>
                        </li> 
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/useful-links" className="nav-links">Useful Links</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-links">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/to-dos" className="nav-links">To-dos</Link>
                </li>
            </ul>
            </div>
            <a href="#" className="burger" onClick={handleOpenNav}>&#9776;</a>
        </nav>
    )
}

export default Navbar;
