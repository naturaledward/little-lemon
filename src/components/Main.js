// src/components/Main.js
// ====================================================
import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'
export default function Main() {
  /* The page should display the existing booked table times & available slots
  using a list component containing several instances of a BookingSlot component.
  Available booking slots will be shared between the components and updated when the user submits the form */
  // an <option> for a <select> form input field. Whatever is passed to this component will be the contents of the option
  const BookingSlot = ({ children }) => <option>{children}</option>
  // map through array passed to it and generate a list of BookingSlot components with the array item as its child
  const AvailableSlots = times => times.map(i => <BookingSlot key={i}>{i}</BookingSlot>)
  // initialize availableTimes state as an empty array of time slots
  const initializeTimes = AvailableSlots([])
  // reducer function for availableTimes state
  // certain available times under time input field will be displayed depending on what date is used in the form
  const updateTimes = (v, { type }) => {
    // for now, make it so time options are populated when today's date or tomorrow's date is selected & time options are static
    const today = new Date() //get today's date & convert it to <input type='date'> input date format: yyyy-mm-dd
    const todayFormatted = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0')
      + '-' + String(today.getDate()).padStart(2, '0')
    // get a formated version of tomorrow's date
    const tomorrowFormatted = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0')
      + '-' + String(today.getDate() + 1).padStart(2, '0')
    if (type === todayFormatted)
      return (['17:00','18:00', '19:00', '20:00', '21:00', '22:00'].map(i => <BookingSlot key={i}>{i}</BookingSlot>))
    if (type === tomorrowFormatted)
      return (['17:00','18:00', '19:00', '20:00', '21:00', '22:00'].map(i => <BookingSlot key={i}>{i}</BookingSlot>))
    // if none of the actions selected, then don't update the state, hence what is returned for update is just the current state
    return v }
  // state lifted from BookingPage.js to be passed to BookingPage.js instead along with its dispatch function, state changed to a reducer
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes)
  return (
    <main className='page'>
      <Routes>
        {/* default route if nothing typed in browser address */}
        <Route path='/' element={<HomePage />} />
        {/* append /reserve in browser address to go here */}
        <Route path='/reserve' element={<BookingPage v={availableTimes} f={dispatchTimes} />} />
      </Routes>
    </main>) }