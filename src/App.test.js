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
  /* need to format Date object to a valid date input value 'YYYY-MM-DD' */
  const today = new Date();
  const todayFormatted = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0')
    + '-' + String(today.getDate()).padStart(2, '0')
  const tomorrowFormatted = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0')
    + '-' + String(today.getDate() + 1).padStart(2, '0')
  /* mock functions represent the props passed to BookingPage */
  // let availablTimes
  const disptchTimes = jest.fn()
  const submtForm = jest.fn()
  test('button is clickable once all 4 inputs populated, on form submission, submitForm from Main.js for additional processing', () => {
    render(<BookingPage f={disptchTimes} s={submtForm}/>);
    // NOTE; if date selection event triggered, dispatch function invoked, thus f={disptchTimes} must be included in render()
    // date initialized with today's date. Note: does not trigger input's onChange event, which would call dispatch
    const dateInput = screen.getByLabelText("Choose date")
    expect(dateInput).toBeInTheDocument()
    expect(dateInput).toHaveValue(todayFormatted)
    expect(dateInput).not.toHaveValue(tomorrowFormatted)
    // dispatch called when input's onChange event triggered
    fireEvent.change(dateInput, { target: { value: '2080-08-02' } })
    expect(dateInput).toHaveValue('2080-08-02')
    expect(disptchTimes).toHaveBeenCalled()
    // TIME
    const timeInput = screen.getByLabelText("Choose time")
    expect(timeInput).toBeInTheDocument()
    expect(timeInput).toHaveValue('')
    // this leads to error because it doesn't exist, it's a dynamic option, cannot coninue the test
    // options for date 2080-08-02 ['17:00', '17:30', '18:30', '20:00', '20:30', '21:00', '22:00', '23:30']
    fireEvent.change(timeInput, { target: { value: '17:30' }})
    // expect(timeInput).toHaveValue('17:30')
    // GUESTS
    const guestsInput = screen.getByLabelText("Number of guests")
    expect(guestsInput).toBeInTheDocument()
    // NOTE: formData.guests state object property, initialized to '', is considered toHaveValue(null) because input type='number'
    expect(guestsInput).toHaveValue(null)
    // NOTE: setting value to a string eg '1' won't work, needs to be int 1
    fireEvent.change(guestsInput, { target: { value: 1 }})
    expect(guestsInput).toHaveValue(1)
    // OCCASION
    const occasionInput = screen.getByLabelText("Occasion")
    expect(occasionInput).toBeInTheDocument()
    expect(occasionInput).toHaveValue('')
    // NOTE: value has to exist as an option in the select to be able to set it
    fireEvent.change(occasionInput, { target: { value: 'Anniversary' }})
    expect(occasionInput).toHaveValue('Anniversary')
    // BUTTON
    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton)
    // NOTE: the function will be called if all inputs are valid
    expect(submtForm).not.toHaveBeenCalled()
  })
})