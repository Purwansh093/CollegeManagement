import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // we’ll style it next

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">CollegeMgmt</h2>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/marks">Marks</Link></li>
        <li><Link to="/fees">Fees</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;