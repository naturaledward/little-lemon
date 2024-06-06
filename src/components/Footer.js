// little-lemon/src/components/Footer.js
// ====================================================
import React from 'react'
import logo from '../assets/logo_square_primary_footer.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
      <section className='footerContentContainer footerContent'>
        <div> <Link to="/"><img className='footerImg' src={logo} alt="header logo" /></Link> </div>
        <div className="footerContentSansLogo">
          <div className='flexChild'>
            <h4 style={{ color: 'var(--primaryDark)' }}>Site Map</h4><br />
            <ul className='footerSiteMapUL'>
              <li><Link className='link' to="/">Home</Link></li>
              <li>About</li>
              <li>Menu</li>
              <li><Link className='link' to="/reserve">Reservations</Link></li>
              <li>Order Online</li>
              <li>Login</li> </ul> </div>
          <div className='flexChild'>
            <h4 style={{ color: 'var(--primaryDark)' }}>Contact</h4><br />
            123 Somestreet Blvd.<br />
            Chicago, IL 60638<br />
            (123) 456-7890<br />
            mail@example.com </div>
          <div className='flexChild'>
            <h4 style={{ color: 'var(--primaryDark)' }}>Social Media Links</h4><br />
            <ul className='footerSiteMapUL'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li> </ul> </div> </div> </section> </footer>); }