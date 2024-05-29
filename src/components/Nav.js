// src/components/Nav.js
// ====================================================
import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <>
      <nav>
        <ul style={{listStyleType:'none'}}>
          <li><Link to='/'>Home</Link></li>
          <li>About</li>
          <li>Menu</li>
          <li><Link to='/res'>Reservations</Link></li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </>)
}