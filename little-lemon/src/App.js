import Home from './Home';
import React from 'react'
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import MetaTags from 'react-meta-tags';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import Nav from './Nav';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faUser} from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {faMinusCircle, faPlusCircle} from"@fortawesome/free-solid-svg-icons"

library.add(faStar, faUser, faCircleArrowLeft, faMinusCircle, faPlusCircle );


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<BookingPage />} />
    </Routes>
    </>

  );
}

export default App;
