import React from 'react';
import { NavLink } from 'react-router-dom';

const Signedoutlinks = () => {
    return (
       <ul className="right">
       <li><NavLink to='/'>SignUp</NavLink></li>
       <li><NavLink to='/'>SignIn</NavLink></li>

       </ul>
    )
}

export default Signedoutlinks;