// src/pages/Home.js
// ====================================================
import React from 'react'
import ArticleDish from '../components/ArticleDish'
import ArticleReview from '../components/ArticleReview'
export default function Home() {
  return (
    <>
      <section id="hero_section">*hero_section</section>
      <section id="highlights_section">*highlight_section
        <ArticleDish />
        <ArticleDish />
        <ArticleDish />
      </section>
      <section id="testimonials_section">*testimonials_section
        <ArticleReview />
        <ArticleReview />
        <ArticleReview />
        <ArticleReview />
      </section>
      <section id="about_section">*about_section</section>
    </>)
}