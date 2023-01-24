import React from "react";
import './Header.css'
import { 
  Link
} from 'react-router-dom';


function Header() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand " style={{ color: '#000' }}>Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<div className="navbar-collapse collapse" id="collapse">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">    
       <Link to="/login" className="nav-link" style={{ color: '#000' }}>Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link" style={{ color: '#000' }}>About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link" style={{ color: '#000' }}>Service</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link" style={{ color: '#000' }}>Contact us</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
   </>
  );
}

export default Header;