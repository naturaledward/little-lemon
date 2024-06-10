// src/components/ReviewCard.js
// ====================================================
import React from 'react'
export default function ReviewCard(p) {
  return ( <>
      <article className='reviewCard'>
        <div>{p.reviewRating}</div>
        <div className='picAndName'><img src={p.reviewPic} alt={'reviewer '+p.reviewName} /><span>{p.reviewName}</span></div>
        <q>{p.reviewMessage}</q>
      </article> </>); }