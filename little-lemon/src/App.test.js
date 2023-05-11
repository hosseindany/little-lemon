import { fireEvent, render, screen } from '@testing-library/react';
import React, { useEffect } from 'react';
import App from './App';
import BookingForm from './BookingForm';
import BookingPage from './BookingPage';
import { BrowserRouter } from 'react-router-dom';
import { renderHook } from '@testing-library/react';
import { useState } from 'react';
import { useTimeUpdater } from './App';
import { act } from '@testing-library/react';
import '../public/api.js'
import ConfirmedBooking from './ConfirmedBooking ';

test('Renders the BookingForm heading', () => {
  const handleSubmit = jest.fn(()=> console.log('hi'));

  const result = render(<BrowserRouter ><BookingForm handler={handleSubmit} /></BrowserRouter>);

  const submitButton = screen.getByTestId('submit')
  const date = result.container.querySelector('#res-date');
  fireEvent.change(date, {target: {value: '2023-05-11'}});

  expect(screen.getByRole('option', { name: '23:30' })).toBeInTheDocument();

  const time = result.container.querySelector('#res-time');
  fireEvent.change(time, {target: {value: '18:30'}});
  const guests = result.container.querySelector('#guests');
  fireEvent.change(guests, {target: {value: '3'}});
  const occasion = result.container.querySelector('#occasion');
  fireEvent.change(occasion, {target: {value: 'Birthday'}});
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalled();
  console.log(window.ab);

})

const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", ];

test('dispatch actions and verify updated state', () => {
  const {result}  = renderHook(() => useTimeUpdater(undefined));
  //console.log(dispatch)
  let [availableTimes, dispatch] = result.current;
  act(() => {
    dispatch({ times: ["17:00", "18:00" ] })
  })

   // expect(result.current[0]).toEqual(["17:00", "18:00" ]);
});

test(' correct attributes are applied to the HTML element', () => {
  const handleSubmit = jest.fn(()=> console.log('hi'));
  const result = render(<BrowserRouter ><BookingForm handler={handleSubmit} /></BrowserRouter>);
  const date = result.container.querySelector('#res-date');
  expect(date).toHaveAttribute('min')
  expect(date).toHaveAttribute('max')
  const time = result.container.querySelector('#res-time');
  expect(time).toHaveAttribute('required')
  const number = result.container.querySelector('#guests');
  expect(number).toHaveAttribute('min','1')
  expect(number).toHaveAttribute('max','10')
  const occasion = result.container.querySelector('#occasion');
  expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Anniversary' })).toBeInTheDocument();

})

test('verify both the valid and invalid states for these functions', () => {
  const handleSubmit = jest.fn();
  const result = render(<BrowserRouter ><BookingForm handler={handleSubmit} /></BrowserRouter>);

// Invalid state  
  const date = result.container.querySelector('#res-date');
  fireEvent.change(date, {target: {value: '2023-05-30'}});
  expect(screen.getByTestId('dateError')).toHaveTextContent('Reservation date must be within 7 days from today');

  expect(screen.getByTestId('timeError')).toHaveTextContent('Time must be chosen');
  expect(screen.getByTestId('numberError')).toHaveTextContent('Number of guests must be chosen');
  expect(screen.getByTestId('occasionError')).toHaveTextContent('Occasion must be chosen');

  fireEvent.click(screen.getByTestId('submit'));
  expect(handleSubmit).not.toHaveBeenCalled();

// Valid state  
fireEvent.change(result.container.querySelector('#res-date'), {target: {value: '2023-05-10'}});
fireEvent.change(result.container.querySelector('#res-time'), {target: {value: '17:30'}});
fireEvent.change(result.container.querySelector('#guests'), {target: {value: '2'}});
fireEvent.change(result.container.querySelector('#occasion'), {target: {value: 'Birthday'}});

expect(screen.getByTestId('dateError')).toHaveTextContent('');

expect(screen.getByTestId('timeError')).toHaveTextContent('');
expect(screen.getByTestId('numberError')).toHaveTextContent('');
expect(screen.getByTestId('occasionError')).toHaveTextContent('');

fireEvent.click(screen.getByTestId('submit'));
expect(handleSubmit).toHaveBeenCalled();

})
// test('Checks initialize times function', () => {
//   render(<BrowserRouter ><App /></BrowserRouter>);
//   expect(initializeTimes).toBeDefined()
// })