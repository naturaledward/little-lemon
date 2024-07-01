// src/components/Main.js
// ====================================================
import { useReducer, useState, useRef, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'
import ConfirmedBooking from '../pages/ConfirmedBooking'
export default function Main() {
  /* The page should display the existing booked table times & available slots
  using a list component containing several instances of a BookingSlot component.
  Available booking slots will be shared between the components and updated when the user submits the form */
  // an <option> for a <select> form input field. Whatever is passed to this component will be the contents of the option
  const BookingSlot = ({ children }) => <option>{children}</option>
  // map through array passed to it and generate a list of BookingSlot components with the array item as its child
  const AvailableSlots = times => times.map(i => <BookingSlot key={i}>{i}</BookingSlot>)
  // initialize availableTimes to available slots fetched from API based on today's date
  /* Note: on mount, date initialized to today but it won't call dispatch as dispatch called when date's onChange event is triggered
  -Initializing date on mount will not trigger that event. It's triggered when user enters a date, thus reducer not called on mount */
  /* Note: times is dependent on date, initial value for date is today, so times must be manually initialized to values for today's date
  changes to the times based on date would be done in reducer so today's date action in reducer must return same result as initialized */
  const today = new Date() //get today's date & convert it to <input type='date'> input date format: yyyy-mm-dd
  const todayFormatted = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0')
    + '-' + String(today.getDate()).padStart(2, '0')
  const initializeTimes = () => AvailableSlots(window.fetchApi(today))
  // Note: initializeTimes is always invoked whenever reducer is called
  // reducer function for availableTimes state
  // certain available times under time input field will be displayed depending on what date is used in the form
  const updateTimes = (v, { type }) => {
    const selectedDate = new Date(type+'T00:00:00') // if you don't add time then the date you pass to fetchApi will be offset by timezone diff
    if (type === todayFormatted)
      return (AvailableSlots(window.fetchApi(today))) //must be the same as what you initialized state with since date was initialized to today
    //this doesn't need to be a reducer after all, fetchApi will determine the times list not the reducer
    return (AvailableSlots(window.fetchApi(selectedDate))) }
  // state lifted from BookingPage.js to be passed to BookingPage.js instead along with its dispatch function, state changed to a reducer
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes())
  const confirmPage = useRef(false) /* navigate to confirm page only upon button click */
  const [navToggle, setNavToggle] = useState(true) /* this will call the useEffect hook to navigate to the confirm page */
  const navigate = useNavigate(); /* use to navigate to confirm page */
  const [displayFormData, setDisplayFormData] = useState({}) /* set to form data  if submit api successful, for display in confirm page */
  const submitForm = obj => { /* to be run after form submission. Will process form data */
    if (window.submitApi(obj)) { /* submit form data to API and if successful, navigate to confirm page */
      setDisplayFormData(obj)
      confirmPage.current = true; /* allows navigation to confirm page when useEffect called */
      setNavToggle(curr => !curr) /* change value of navToggle to call useEffect */ } }
  useEffect(() => { /* navigate to confirm page when navToggle changes */
     if (confirmPage.current) { navigate('/dMMeZG01qysOejYkUrXJjzgNS4hR4wYM'); //navigate to confirm page only if confirm page access is true
      const id = `scrollToTop` /* add smooth scrolling to the top after submit */
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start", }); } }
      // resets confirm page access back to false and will only be set to true on buton click
      confirmPage.current = false }, [navigate, navToggle]);
  return (
    <main className='page'>
      <Routes>
        {/* default route if nothing typed in browser address */}
        <Route path='/' element={<HomePage />} />
        {/* append /reserve in browser address to go here */}
        <Route path='/reserve' element={<BookingPage v={availableTimes} f={dispatchTimes} s={submitForm} />} />
        {/* route doesn't exist until state variable is set upon form submission */}
        <Route path='/dMMeZG01qysOejYkUrXJjzgNS4hR4wYM' element={<ConfirmedBooking d={displayFormData.dateVal} t={displayFormData.timeVal}
          g={displayFormData.guests} o={displayFormData.occasion} />} />
      </Routes>
    </main>) }