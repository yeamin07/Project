import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <nav className="header__navbar">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><a href='#'>Checkout</a></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><a href='#'>Categoriese</a></li>
                        <li><a href='#'>About Us</a></li>   
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
