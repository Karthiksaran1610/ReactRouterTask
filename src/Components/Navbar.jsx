import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg p-4">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/' >All</Link>
        </li>
        <li className="nav-item">
        <Link to='/FullStackDevelopment'>FullStackDevelopment</Link>
        </li>
        <li className="nav-item">
        <Link to='/CyberSecurity'>CyberSecurity</Link>
        </li>
        <li className="nav-item">
        <Link to='/DataScience'>DataScience</Link>
        </li>
        <li className="nav-item">
        <Link to='/Carrer'>Carrer</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;