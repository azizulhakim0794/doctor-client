import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/home" className="nav-link mr-5 active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link mr-5 active">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/event" className="nav-link mr-5 active">Event</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link mr-5 active">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link mr-5 active">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
        
    );
};

export default NavBar;