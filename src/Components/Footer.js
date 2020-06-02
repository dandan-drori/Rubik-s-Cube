import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo">
                <Link to="/" className="footer-logo">Easy<span className='logo-span'>Rubik</span></Link>
                <p className='copyright'>Copyright &copy; EasyRubik 2020</p>
            </div>
            <div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-column">
                        <p className="footer-links-header">
                            Solving Methods
                        </p>
                        <Link className="footer-links" to="/solving-methods/beginner's-method">
                            Beginner's Method     
                        </Link>
                        <Link className="footer-links" to='/solving-methods/cfop'>
                            CFOP 
                        </Link>
                        <Link className="footer-links" to='/solving-methods/zz'>
                            ZZ 
                        </Link>
                        <Link className="footer-links" to='/solving-methods/roux'>
                            Roux 
                        </Link>
                    </div>
                    <div className="footer-links-column">
                        <p className="footer-links-header">
                            More
                        </p>
                        <Link className="footer-links" to='/useful-links'>
                            Useful Links    
                        </Link>
                        <Link className="footer-links" to='/about'>
                            About
                        </Link>
                        <Link className="footer-links" to='/to-dos'>
                            To-dos
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
