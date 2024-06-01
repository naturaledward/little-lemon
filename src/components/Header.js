// src/components/Header.js
// ====================================================
import React from 'react'
import Nav from './Nav'
import logo from '../assets/logo_long_primary_Header.svg'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      {/* Make the logo a link to home as well */}
      {/* this isn't a text link so no need for className='link' because none of those styles will apply */}
      <Link to="/"><img src={logo} alt="header logo" /></Link>
      <Nav/>
    </header>);}