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
// availableTimes is a list of available times to make a reservation for, displayed as a list of options for <select> input on the form
const BookingForm = ({ availableTimes, dispatchTimes }) => {
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  /* in addition to updating date state value like in handleChange, call the dispatch function of availableTimes state
  and pass to it the date that was selected for the date form field
  dispatch function will update availableTimes based on that date to be displayed as a list of options for the time form input field */
  const handleChangeResDate = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    dispatchTimes({ type: e.target.value }) }
  const formDataInitialObj = { dateVal: '', timeVal: '', guests: '1', occasion: 'Birthday' }
  const [formData, setFormData] = useState(formDataInitialObj)
  const handleSubmit = e => {
    e.preventDefault(); /* prevent default behavior upon submit  */
    alert(formData.dateVal + '\n' + formData.timeVal + '\n' + formData.guests + '\n' + formData.occasion)
    setFormData(formDataInitialObj)
  } /* re initialize state */
  return <section className='bookingForm'> <div className='contentArea'>
    <form onSubmit={handleSubmit} className='formElement'>
      <label htmlFor='res-date'>Choose date</label>
      {/* on change of the date field, the dispatch for availableTimes state is called to update time field options */}
      <input id='res-date' type='date' name='dateVal' value={formData.dateVal} onChange={handleChangeResDate} />
      <label htmlFor='res-time'>Choose time</label>
      <select id='res-time' name='timeVal' value={formData.timeVal} onChange={handleChange}>
        {/* a list of <option> tags passed from Main.js that contain all available time slots for a particular date input */}
        {availableTimes}</select>
      <label htmlFor='guests'>Number of guests</label>
      <input id='guests' type='number' placeholder='1' min='1' max='10' name='guests' value={formData.guests} onChange={handleChange} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name='occasion' value={formData.occasion} onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option> </select>
      <button type="submit">Make Your reservation</button> </form> </div> </section> }
const BookingPage = ({ v, f }) => <> <BookingHero /> <BookingForm availableTimes={v} dispatchTimes={f} /> </>;
export default BookingPage;