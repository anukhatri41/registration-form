import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="register">Register</Link>
    </nav>
   )
}

export default NavBar;
