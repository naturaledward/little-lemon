// little-lemon/src/components/Footer.js
// ====================================================
import React from 'react'
import logo from '../assets/logo_square_primary_footer.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  const handleClick = () => { /* scroll to an element with id scrollToTop in the header(at the top) that's always visible */
    const id = `scrollToTop`
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", }); } }
  return (
    <footer>
      <section className='footerContentContainer footerContent'>
        {/* onClick of any of the links, you want to scroll to top of page from the footer handleClick will perform that function */}
        <div> <Link to="/" onClick={handleClick}><img className='footerImg' src={logo} alt="footer logo home" /></Link> </div>
        <div className="footerContentSansLogo">
          <div className='flexChild'>
            <h4 style={{ color: 'var(--primaryDark)' }}>Site Map</h4><br />
            <ul className='footerSiteMapUL'>
              {/* onClick of any of the links to scroll to top of page from the footer handleClick will perform that function */}
              <li><Link className='link' to="/" onClick={handleClick}>Home</Link></li>
              <li>About</li>
              <li>Menu</li>
              {/* onClick of any of the links to scroll to top of page from the footer handleClick will perform that function */}
              <li><Link className='link' to="/reserve" onClick={handleClick}>Reservations</Link></li>
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