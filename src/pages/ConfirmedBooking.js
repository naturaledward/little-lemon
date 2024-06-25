// src/pages/ConfirmedBooking.js
// ====================================================
import React from 'react'
const ConfirmedBooking = ({ dateVal, timeVal, guests, occasion }) => {
  return <>
    <h1>Date: {dateVal}</h1>
    <h1>Time: {timeVal}</h1>
    <h1>Number of guests: {guests}</h1>
    <h1>Occasion: {occasion}</h1>
  </>
}
export default ConfirmedBooking
