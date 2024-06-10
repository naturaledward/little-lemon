// src/pages/ReservePage.js
// ====================================================
import React from 'react'
import { Link } from 'react-router-dom'
export default function ReservePage() {
  return ( <>
      <section className='reserveHero'>
        <div className='contentArea'>
          <div><h1>Reserve a Table</h1>
            <p>Easily and conveniently reserve a table for your party online! Simply fill
              out the form below and you will receive a confirmation immediately.</p> </div>
          <img src={require('../assets/stock_restaurant.jpg')} alt="hero reserve" /> </div> </section>
      <section>Reservation Form Section</section> </>);}