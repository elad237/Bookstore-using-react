import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <h1><Link to="/">BookShop</Link></h1>
        <button type="button">
          <span />
          <span />
          <span />
        </button>
        <ul>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
