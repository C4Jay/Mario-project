 import React from 'react';
 import { Link } from 'react-router-dom';
 import Signedinlinks from './signedinlinks'
import Signedoutlinks from './signedoutlinks';

 const Navbar = () => {
     return (
         <nav className="nav-wrapper grey darken-3">
         <div className="container">
         <Link to='/' className="brand-logo">
         MarioProject
         </Link>
         <Signedinlinks></Signedinlinks>
  <Signedoutlinks></Signedoutlinks>
       
         </div>
         </nav>

     )
 }

 export default Navbar;