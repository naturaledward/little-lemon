// src/pages/BookingPage.js
// ====================================================
import React, { useState } from 'react'
import occasionIcon from '../assets/icon_glass-drinks.svg' /* import the 2 images that will be overlayed on top of occasion select */
import occasionArrow from '../assets/icon_chevron-down-solid.svg'
const BookingHero = () =>
  <section className='bookingHero'>
    <div className='contentArea'>
      <div><h1>Reserve a Table</h1>
        <p>Easily and conveniently reserve a table for your party online! Simply fill
          out the form below and you will receive a confirmation immediately.</p> </div>
      <img src={require('../assets/stock_restaurant.jpg')} alt='hero reserve' /> </div> </section>
// availableTimes is a list of available times to make a reservation for, displayed as a list of options for <select> input on the form
const BookingForm = ({ availableTimes, dispatchTimes, submitForm }) => {
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  /* in addition to updating date state value like in handleChange, call the dispatch function of availableTimes state
  and pass to it the date that was selected for the date form field
  dispatch function will update availableTimes based on that date to be displayed as a list of options for the time form input field */
  const handleChangeResDate = e => {
    /* make it so whenever a new date is selected, the time field will deselect its current time option and revert to the placeholder */
    setFormData({ ...formData, timeVal: '', [e.target.name]: e.target.value })
    dispatchTimes({ type: e.target.value }) }
  const today = new Date() //get today's date & convert it to <input type='date'> input date format: yyyy-mm-dd
  const todayFormatted = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0')
    + '-' + String(today.getDate()).padStart(2, '0') // to be used to initialize date & set min value
  // NOTE: though time options are dependent on date, still need to initialize time options as you did for dateVal(today's date)
  // for consistency, initialized value must match the returned value for the associated action(today's date) in the reducer
  // initialize form values and make sure there are placeholders for the empty ones
  const [formData, setFormData] = useState({ dateVal: todayFormatted, timeVal: '', guests: '', occasion: '' })
  // keep submit button disabled until all form fields are populated
  // date will always have a value so can be disregarded in isDisabled logic
  const isDisabled = !formData.timeVal || !(formData.guests >= 1 && formData.guests <= 10) || !formData.occasion
  const handleSubmit = e => {
    e.preventDefault() /* prevent default behavior upon submit  */
    submitForm(formData) /* send form data to Main for processing */
    setFormData({ dateVal: todayFormatted, timeVal: '', guests: '', occasion: '' }) } /* re initialize state */
  return <section className='bookingForm'> <div className='contentArea'>
    <h1>Book Now</h1>
    <form onSubmit={handleSubmit} className='formElement'>
      <div className='field'>
        <label htmlFor='res-date'>Choose date</label>
        {/* on change of the date field, the dispatch for availableTimes state is called to update time field options */}
        {/* make it so user can only select a reservation date for today onward */}
        <input id='res-date' type='date' name='dateVal' min={todayFormatted} value={formData.dateVal} onChange={handleChangeResDate} />
      </div>
      <div className='field'>
        <label htmlFor='res-time'>Choose time</label>
        <div className='img-and-select-container'> {/* arrow img to be overlayed on time select */}
          <img className='occasion-arrow' src={occasionArrow} alt='occasion arrow' />
          <select id='res-time' name='timeVal' value={formData.timeVal} onChange={handleChange}>
            {/* a list of <option> tags passed from Main.js that contain all available time slots for a particular date input */}
            {/* placeholder for empty options. Disabled & can't be selected. To be set to '' at initialization & when new date selected
            -Works because when value prop of <select> equals value prop of one of its <option>, that option will be selected */}
            <option value='' disabled>Select time for given date</option>
            {availableTimes}</select> </div> </div>
      <div className='field'>
        <label htmlFor='guests'>Number of guests</label>
        <input id='guests' type='number' placeholder='enter 1-10' min='1' max='10'
          name='guests' value={formData.guests} onChange={handleChange} /> </div>
      <div className='field'>
        <label htmlFor='occasion'>Occasion</label>
        <div className='img-and-select-container'>
          <img id='occasion-icon' src={occasionIcon} alt='occasion icon' /> {/* both images to be overlayed on occasion select */}
          <img className='occasion-arrow' src={occasionArrow} alt='occasion arrow' />
          <select id='occasion' name='occasion' value={formData.occasion} onChange={handleChange}>
            <option value='' disabled>Occasion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Other</option> </select> </div> </div>
      <div className='field'><button type='submit' disabled={isDisabled}>Make Your reservation</button></div>
    </form> </div> </section> }
const BookingPage = ({ v, f, s }) => <> <BookingHero /> <BookingForm availableTimes={v} dispatchTimes={f} submitForm={s}/> </>
export default BookingPage