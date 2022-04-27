import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MainHeader() {
  return (
    <nav>
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">Add Dealer</NavLink>
        <NavLink to="/products">Products</NavLink>
      </ul>
    </nav>
  );
}