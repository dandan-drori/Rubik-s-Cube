import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <a href="#">EasyRubik</a>
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-links">Solving Methods</a>
                    <ul className="dropdown">
                        <li>
                            <a href="#">Beginner's Method</a>    
                        </li> 
                        <li>
                            <a href="#">CFOP</a>
                        </li> 
                        <li>
                            <a href="#">ZZ</a>
                        </li> 
                        <li>
                            <a href="#">Roux</a>
                        </li> 
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-links">Useful Links</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-links">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
