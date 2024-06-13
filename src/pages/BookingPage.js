// src/pages/BookingPage.js
// ====================================================
import React from 'react'
// import { Link } from 'react-router-dom'
const BookingHero = () =>
  <section className='bookingHero'>
    <div className='contentArea'>
      <div><h1>Reserve a Table</h1>
        <p>Easily and conveniently reserve a table for your party online! Simply fill
          out the form below and you will receive a confirmation immediately.</p> </div>
      <img src={require('../assets/stock_restaurant.jpg')} alt="hero reserve" /> </div> </section>;
const BookingForm = () =>
  <section className='bookingForm'>
    <div className='contentArea'>
      form goes in here
    </div>
  </section>
const BookingPage = () => <> <BookingHero /> <BookingForm /> </>;
export default BookingPage;