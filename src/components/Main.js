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
  const [confirmPage, setConfirmPage] = useState('') /* make the confirm page accessible only after successful form submission */
  const [navToggle, setNavToggle] = useState(true) /* this will call the useEffect hook to navigate to the confirm page */
  const firstRenderRef = useRef(true); /* use this to skip the first render. First render will call useEffect and attempt to navigate to
  a route that doesn't exist: /'', ie you won't be able to append /reserve in address bar to get to the reserve page */
  const navigate = useNavigate(); /* use to navigate to confirm page */
  const [displayFormData, setDisplayFormData] = useState({}) /* set to form data  if submit api successful, for display in confirm page */
  const submitForm = obj => { /* to be run after form submission. Will process form data */
    if (window.submitApi(obj)) { /* submit form data to API and if successful, navigate to confirm page */
      setDisplayFormData(obj)
      setConfirmPage('/confirm') /* this creates route to ConfirmedBooking.js, preventing user from going to page by typing /confirm in browser */
      setNavToggle(curr => !curr) /* change value of navToggle to call useEffect */ } }
  useEffect(() => { /* navigate to confirm page when navToggle changes */
    if (firstRenderRef.current) { firstRenderRef.current = false; } /* skip the first render to prevent navigation attempt */
    else { navigate(confirmPage); /* When you leave page, can't access it again, even if you append /confirm in browser. Won't work because it seems
    to cause app unmount of app, then reload, which re initializes all state vars, including confirmPage which goes back to '' */ }
  }, [navToggle]);
  return (
    <main className='page'>
      <Routes>
        {/* default route if nothing typed in browser address */}
        <Route path='/' element={<HomePage />} />
        {/* append /reserve in browser address to go here */}
        <Route path='/reserve' element={<BookingPage v={availableTimes} f={dispatchTimes} s={submitForm} />} />
        {/* route doesn't exist until state variable is set upon form submission */}
        <Route path={confirmPage} element={<ConfirmedBooking dateVal={displayFormData.dateVal} timeVal={displayFormData.timeVal}
          guests={displayFormData.guests} occasion={displayFormData.occasion} />} />
      </Routes>
    </main>) }