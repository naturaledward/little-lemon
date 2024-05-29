// src/components/Header.js
// ====================================================
import React from 'react'
import { ReactComponent as Logo } from '../assets/logo_primary_small_forHeader.svg';
import Nav from './Nav'
export default function Header() {
  return (
    <>
      <header>
        <Logo />
        <Nav />
      </header>
    </>)
}