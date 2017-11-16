import React from 'react';
import { Link } from 'react-router';

import './Header.css';

const Header = () => (
  <header className="main-header">
    <nav>
      <Link to='/'>People</Link>
    </nav>
  </header>
);

export default Header;
