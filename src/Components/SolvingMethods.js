import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'

const SolvingMethods = () => {
    return (
        <div className='solving-methods-page'>
            <Header headerText='Solving Methods' className="solving-methods-header"/>
            <ul className='solving-methods-links'>
                <li className='solving-methods-link'>
                    <Link to="/solving-methods/beginner's-method" className='link-custom-style'>Beginner's Method</Link>
                </li>
                <li className='solving-methods-link'>
                    <Link to="/solving-methods/cfop" className='link-custom-style'>CFOP</Link>
                </li>
                <li className='solving-methods-link'>
                    <Link to="/solving-methods/zz" className='link-custom-style'>ZZ</Link>
                </li>
                <li className='solving-methods-link'>
                    <Link to="/solving-methods/roux" className='link-custom-style'>Roux</Link>
                </li>
            </ul>
        </div>
    )
}

export default SolvingMethods