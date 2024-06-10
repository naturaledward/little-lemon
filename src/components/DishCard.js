// src/components/DishCard.js
// ====================================================
import React from 'react'
import deliveryIcon from '../assets/bike.svg'
export default function DishCard(p) {
  return ( <>
      <article className='dishCard'>
        <img className='dishImg' src={p.dishImage} alt={p.dishName} />
        <div> <h3>{p.dishName}</h3>
          <h3 className='colorAndFloat'>{p.price}</h3> </div>
        <p>{p.description} </p>
        <div className='justifySelfBottom'><b>Order a delivery</b>
          <img className='deliveryIcon' src={deliveryIcon} alt="bike icon" /></div> </article> </>); }