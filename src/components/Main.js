// src/components/Main.js
// ====================================================
import React from 'react'
import Reserve from '../pages/Reserve'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/res" element={<Reserve />} />
      </Routes>


    </main>)
}