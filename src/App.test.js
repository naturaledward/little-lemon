// src/App.test.js
// ====================================================
import { render, screen } from "@testing-library/react";
import BookingPage from './pages/BookingPage';
describe("booking form tests", () => {
  test('Renders the BookingForm heading and Choose date label', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText('Book Now');
    const labelElement = screen.getByText('Choose date');
    expect(headingElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  })
})