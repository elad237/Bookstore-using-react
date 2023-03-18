import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar bg-white py-4 px-5 nav-style">
        <h1><Link to="/" className="nav-brand">BookShop</Link></h1>
        <ul className="nav nav-titles">
          <li><Link to="/books" className="nav-link text-uppercase navbar-text">Books</Link></li>
          <li><Link to="/categories" className="nav-link text-uppercase navbar-text">Categories</Link></li>
        </ul>
        <button type="button" className="btn rounded-pill border"><img src="/person-fill.svg" alt="Avatar Logo" width={30} /></button>
      </nav>
    </header>
  );
}

export default Header;
