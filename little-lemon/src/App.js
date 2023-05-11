import Home from './Home';
import React, {useEffect, useReducer } from 'react'
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import MetaTags from 'react-meta-tags';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking ';
import Nav from './Nav';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faUser} from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {faMinusCircle, faPlusCircle} from"@fortawesome/free-solid-svg-icons"

library.add(faStar, faUser, faCircleArrowLeft, faMinusCircle, faPlusCircle );
const initializeTimes  =   []

const updateTimes  = (state, action)=>{
  if(typeof action.times!='undefined') return action.times
  return initializeTimes
}

function useTimeUpdater(){
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
  return [availableTimes, dispatch]
}

function App() {
  const [booking, setBooking] = useState(undefined);
  const navigate = useNavigate();
  const handleSubmit = (bookingData)=>{
    setBooking(bookingData);
  }
  useEffect(() => {
    if (typeof booking!='undefined') {
      const APITimes = window.submitAPI(booking)
      navigate('ConfirmedBooking')
      // console.log(booking);
      // console.log(APITimes);
    }
   //dispatch({times: APITimes})
  }
  ,[booking])
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<BookingPage bookingState = {booking} handler = {handleSubmit} />} />
      <Route path="/ConfirmedBooking" element={<ConfirmedBooking bookingState = {booking} />} />
    </Routes>
    </>

  );
}

export default App;
export {useTimeUpdater};

