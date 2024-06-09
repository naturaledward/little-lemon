// src/components/Main.js
// ====================================================
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ReservePage from '../pages/ReservePage'
export default function Main() {
  return (
    <main className='page'>
      <Routes>
        {/* default route if nothing typed in browser address */}
        <Route path='/' element={<HomePage />} />
        {/* append /reserve in browser address to go here */}
        <Route path='/reserve' element={<ReservePage />} />
      </Routes>
    </main>); }