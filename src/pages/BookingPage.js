// src/pages/BookingPage.js
// ====================================================
import React, { useState } from 'react'
const BookingHero = () =>
  <section className='bookingHero'>
    <div className='contentArea'>
      <div><h1>Reserve a Table</h1>
        <p>Easily and conveniently reserve a table for your party online! Simply fill
          out the form below and you will receive a confirmation immediately.</p> </div>
      <img src={require('../assets/stock_restaurant.jpg')} alt="hero reserve" /> </div> </section>;
const BookingForm = () => {
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const formDataInitialObj = { dateVal: '', timeVal: '17:00', guests: '1', occasion: 'Birthday' }
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
  const listTimes = availableTimes.map(i => <option key={i}>{i}</option>)
  const [formData, setFormData] = useState(formDataInitialObj)
  const handleSubmit = e => {
    e.preventDefault(); /* prevent default behavior upon submit  */
    alert(formData.dateVal + '\n' + formData.timeVal + '\n' + formData.guests + '\n' + formData.occasion)
    setFormData(formDataInitialObj)
  } /* re initialize state */
  return <section className='bookingForm'> <div className='contentArea'>
    <form onSubmit={handleSubmit} className='formElement'>
      <label htmlFor='res-date'>Choose date</label>
      <input id='res-date' type='date' name='dateVal' value={formData.dateVal} onChange={handleChange} />
      <label htmlFor='res-time'>Choose time</label>
      <select id='res-time' name='timeVal' value={formData.timeVal} onChange={handleChange}>
        {listTimes}</select>
      <label htmlFor='guests'>Number of guests</label>
      <input id='guests' type='number' placeholder='1' min='1' max='10' name='guests' value={formData.guests} onChange={handleChange} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name='occasion' value={formData.occasion} onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option> </select>
      <button type="submit">Make Your reservation</button> </form> </div> </section> }
const BookingPage = () => <> <BookingHero /> <BookingForm /> </>;
export default BookingPage;