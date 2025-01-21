import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';
import cartIcon from './../assets/images/shopping-cart.png';
import bobba from '../assets/images/bobba.png';
import vaderLogo from '../assets/images/vaderLogo.png';
import lucas from '../assets/images/LucasFilms.png';
import droid from '../assets/images/droid.png';
import chewy from '../assets/images/chewy.png';
import yoda from '../assets/images/yoda2.png';

const Header = ({ cart }) => {
  // Calculate total cart items
  const totalCartItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header>
      <div className="header-content">
        <div className="header-title-container">
          <h1 className="header-title">Saber Nation</h1>
          <nav className="nav-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shops</Link></li>
              <li><Link to="/Blog">Blogs</Link></li>

              <li className="dropdown">
                <span className="dropdown-toggle">About Us</span>
                <ul className="dropdown-menu">
                <li><Link to="/meetTheTeam">Meet The Team</Link></li>
                  <li><Link to="/reviews">Customer Reviews</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="logo-cart-container">
        <img src={yoda} alt="Image 5" className="header-image image-5"/>
        <img src={chewy} alt="Image 4" className="header-image image-4"/>
          <img src={droid} alt="Image 3" className="header-image image-3"/>
          <img src={lucas} alt="Image 2" className="header-image image-2"/>
          <img src={bobba} alt="Saber Nation Logo" className="header-logo" />
          <img src={vaderLogo} alt="Image 1" className="header-image" />

          <div className="cart-container">
            <Link to="/cart" className="cart-link">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
              {totalCartItems > 0 && (
                <span className="cart-count">{totalCartItems}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
