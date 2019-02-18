import React from 'react';
import './Navbar.scss';
import logo from'../../logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
       <img src={logo} alt="city tour logo" />  
       <ul className="nav-links">
           <li>
               <a className="nav-link">
                 home
               </a>
           </li>
           <li>
               <a className="nav-link">
                 about
               </a>
           </li>
           <li>
               <a className="nav-link active">
                 tours
               </a>
           </li>
       </ul>
    </nav>
      
  )
}
