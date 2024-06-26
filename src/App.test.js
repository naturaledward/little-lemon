// src/App.test.js
// ====================================================
import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from './pages/BookingPage';
describe("booking form tests", () => {
  test('Renders the BookingForm heading and Choose date label', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText('Book Now');
    const labelElement = screen.getByText('Choose date');
    expect(headingElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  })
  // include the testScript file that you copied all functions to for testing purposes
  const f = require('./utils/testScript')
  test("initializeTimes reducer function calls fetchApi, which returns an array of available times when passed a Date object", () => {
    // copied fetchApi from public folder into ./utils/testScript.js and exported it for testing purposes
    let dateTest = new Date('2024-06-26T00:00:00');
    // use toEqual (not toBe) to compare objects and arrays
    expect(f.fetchAPITest(dateTest)).toEqual(['17:00', '17:30', '19:00', '20:00', '20:30', '21:30', '22:00', '22:30']);
    dateTest = new Date('2024-07-01T00:00:00');
    expect(f.fetchAPITest(dateTest)).toEqual(['17:00', '17:30', '18:00', '20:00', '21:00', '23:30']);
  })
  test("updateTimes reducer function calls fetchApi, and returns array of available times when passed {type: 'YYYY-MM-DD'}", () => {
    //copied updateTimes to an external file into ./utils/testScript.js and exported it for testing purposes
    //removed 1st argument, v, as it's never used
    //removed if logic and AvailavbleSlots call which creates the select options as testing the fetchApi functionalities are sufficient
    const type = '2080-08-02'
    expect(f.updateTimes({ type })).toEqual(['17:00', '17:30', '18:30', '20:00', '20:30', '21:00', '22:00', '23:30']);
  })
})