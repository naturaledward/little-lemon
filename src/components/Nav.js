// src/components/Nav.js
// ====================================================
import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <nav>
      <ul>
        {/* anchor tags won't work with default react library, eg <a href="/">Homepage</a>, so use react router tags instead */}
        {/* add a className to Link so you can style it */}
        {/* to is associated with Routes Route path, not case-sensitive, & can be named anything */}
        {/* browser uses to in order to determine if a Link has been visited */}
        <li><Link className='link' to="/">Home</Link></li>
        <li>About</li>
        <li>Menu</li>
        <li><Link className='link' to="/reserve">Reservations</Link></li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>);}