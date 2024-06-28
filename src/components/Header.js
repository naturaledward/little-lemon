// src/components/Header.js
// ====================================================
import React from 'react'
import Nav from './Nav'
import logo from '../assets/logo_long_primary_Header.svg'
import { Link } from 'react-router-dom'
export default function Header() {
  const [ulClass, setULClass] = React.useState('')
  const handleClick = () => {
    if (ulClass === '') {
    setULClass('displayFlex')
    } else { setULClass('') } }
  return (
    <>
      <header id="scrollToTop"> {/* id not for styling, only purpose of this id is to allow footer links to scroll to the top */}
        {/* Make the logo a link to home as well */}
        {/* this isn't a text link so no need for className='link' because none of those styles will apply */}
        <Link to="/"><img src={logo} alt="header logo home" /></Link>
        <Nav/>
        {/* get hamburger menu icon to display for small screens from url
        -Icon by default is hidden, then revealed only on small screens, media query reveals it
        -Main ul will be hidden when media query for small screens activates */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button id="hamburgerIcon" onClick={handleClick}
          aria-label='Reveal Nav Menu Options'> {/* the hamburger icon is a button that will reveal/hide menu for small screens
        -onClick, It toggles a state variable, ulClass, between a blank string and 'displayFlex'
        -ulClass will be set to the className of the hamburger ul for small screens
        -by default, the ul won't have a className, so it will be hidden due to default ul#hamburgerUL {display: none;}
        -On button click it will have a className of displayFlex
        -That class simply sets display: flex;. and will only be revealed on small screens
        -To make sure of this, it is within the media query for small screens, so if screen is large, it won't be selected and
        the default ul#hamburgerUL {display: none;} takes precidence.
        -On small screens, the media query will be activated, and the ul, if it has a className of 'displayFlex' (based on the toggle)
        will select ul#hamburgerUL.displayFlex {display: flex;} within the media query, since it has higher specifity over the default
        ul#hamburgerUL {display: none;} that is outside the media query, and thus the ul is unhidden
        -When the button is clicked again, the ul won't have className='displayFlex' and thus ul#hamburgerUL.displayFlex {display: flex;}
        won't be selected and the default ul#hamburgerUL {display: none;} will hide the ul
        -If screen expands and exits the media query for small screens, the ul will be hidden even if its className='displayFlex' because
        that class (which reveals the ul) only exists within the media query for small screens and thus won't be selected since the large
        screen width will deactivate media query. The default ul#hamburgerUL {display: none;} will take precedence and hide the ul */}
          <i className="fa fa-bars" style={{ fontSize: '1.3rem', padding: '10px 0' }}></i></button> </header>
      <ul id='hamburgerUL' className={ulClass}>{/* Implement another ul for small screen hamburger icon menu
      -To be outside of header so it rests below logo and nav
      -Hidden by default & will always be hidden unless hamburger icon reveals it */}
        <li><Link className='link' to="/">Home</Link></li> {/* add a className to Link so you can style it */}
        <li>About</li>
        <li>Menu</li>
        <li><Link className='link' to="/reserve">Reservations</Link></li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </>);}