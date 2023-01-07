import React from "react";
import './Header.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function Header() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<div className="navbar-collapse collapse" id="collapse">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">    
       <a className="nav-link " ><Link to="/login">Login</Link></a> 
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " >About us</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
   </>
  );
}

export default Header;