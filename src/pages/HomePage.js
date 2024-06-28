// src/pages/HomePage.js
// ====================================================
import React from 'react'
import { Link } from 'react-router-dom'
import DishCard from '../components/DishCard'
import ReviewCard from '../components/ReviewCard'
const dishCardList = [ /* data for building DishCard component to display the dish cards */
  { dishImage: () => require('../assets/dish_greek_salad.jpg'),
    dishName: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style'
      +' feta cheese, garnished with crunchy garlic and rosemary croutons.', },
  { dishImage: () => require('../assets/dish_bruschetta.jpg'),
    dishName: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.', },
  { dishImage: () => require('../assets/dish_lemon_dessert.jpg'),
    dishName: 'Lemon Dessert',
    price: '$5.00',
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be "
      +'imagined.', },];
const reviewCardList = [ /* data for building ReviewCard component to display the review cards */
  { reviewRating: '★★★★★',
    reviewPic: () => require('../assets/review_Ana M.jpeg'),
    reviewName: 'Ana M.',
    reviewMessage: 'The lasagna was amazing! Will try the pizza next time.', },
  { reviewRating: '★★★★★',
    reviewPic: () => require('../assets/review_Jacob T.jpeg'),
    reviewName: 'Jacob T.',
    reviewMessage: 'Been coming here for months. My favorite local spot!', },
  { reviewRating: '★★★★★',
    reviewPic: () => require('../assets/review_Larry M.jpeg'),
    reviewName: 'Larry M.',
    reviewMessage: 'Great place to bring the kids and wife. Great prices too!', },
  { reviewRating: '★★★★☆',
    reviewPic: () => require('../assets/review_Zachary G.jpeg'),
    reviewName: 'Zachary G.',
    reviewMessage: 'Long wait, but totally worth it. Lots of healthy choices!', }, ];
const CallToAction = () =>
  <section className='homeHero'>
    <div className='contentArea'>
      <div><h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link className='link' to="/reserve"><button aria-label='Reserve Page'>Reserve a Table</button></Link> </div>
      <img src={require('../assets/hero_waiter_tray.jpg')} alt="hero home" /> </div> </section>;
const Specials = () =>
  <section className='homeSpecials'>
    <div className='contentArea'>
      <h1>This week's specials!</h1>
      <div><button>Online Menu</button></div> {/* wrapping button in div retains its size. doesn't stretch to grid cell boundary */}
      <div className='dishCards'>
      {dishCardList.map((dishCard) => ( /* map through dishCardList and generate a card for each dish using DishCard component */
        <DishCard
          key={dishCard.dishName}
          dishImage={dishCard.dishImage()}
          dishName={dishCard.dishName}
          price={dishCard.price}
          description={dishCard.description} />))} </div> </div> </section>;
const CustomersSay = () =>
  <section className='homeTestimonials'>
    <div className='contentArea'>
      <h1>Testimonials</h1>
      <div className='reviews'>
        {reviewCardList.map((reviewCard) => (
          <ReviewCard
          key={reviewCard.reviewName}
          reviewRating={reviewCard.reviewRating}
          reviewPic={reviewCard.reviewPic()}
          reviewName={reviewCard.reviewName}
          reviewMessage={reviewCard.reviewMessage} /> )) } </div> </div> </section>;
const Chicago = () =>
  <section className='homeDescription'>
    <div className='contentArea'>
      <div className="descriptionText"><h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared
          dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
          Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.</p> </div>
      <div className="descriptionImages">
        <img className='img-1' src={require('../assets/owners_1.jpg')} alt="owner Mario" />
        <img className='img-2'src={require('../assets/owners_2.jpg')} alt="owner Adrian" />
      </div> </div> </section>;
const HomePage = () => <> <CallToAction /> <Specials /> <CustomersSay /> <Chicago /> </>;
export default HomePage;