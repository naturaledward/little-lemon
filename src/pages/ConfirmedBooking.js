// src/pages/ConfirmedBooking.js
// ====================================================
const ConfirmHero = ({ dateVal, timeVal, guests, occasion }) =>
  <section className='bookingHero'> {/* retained layout and style of bookingHero */}
    <div className='contentArea'>
      <div><h1>Your reservation has been confirmed!</h1>
        <p>We look forward to seeing you on {dateVal} at {timeVal} for your occasion: {occasion}! Number of guests: {guests}</p> </div>
      <img src={require('../assets/logo_lemon_primary.png')} alt='hero reserve' /> </div> </section>
const ConfirmedBooking = ({ d, t, g, o }) => <ConfirmHero dateVal={d} timeVal={t} guests={g} occasion={o} />
export default ConfirmedBooking