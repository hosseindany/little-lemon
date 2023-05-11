import React, {useEffect} from 'react'
import { MetaTags } from 'react-meta-tags';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import { useState } from 'react';
import { useTimeUpdater } from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking ({bookingState}){
    const navigate = useNavigate();
    const booking = bookingState;
    return(
        <>
        <title>Page 1</title>
        <MetaTags>
        <meta id="meta-description" name="description" content="Some description." />
        <meta id="og-title" property="og:title" content="MyApp" />
        <meta id="og-image" property="og:image" content="path/to/image.jpg" />
        </MetaTags>
          <Header></Header>
          <div className="hero-container">
                <div className="container booking">

                    <Hero className="no-img"  h1="Little Lemon" h2="Table Reservation" text="" button=""><FontAwesomeIcon onClick={() => navigate(-1)} className='back-icon btn' icon="fa-solid fa-circle-arrow-left" size="2xl" color="white" /></Hero>
                </div>
          </div>
          <div className="container" style={{'minHeight': '368px'}}>
            <h1> The booking has been confirmed</h1>
            <div>
            {typeof bookingState!='undefined' &&
            <>
            <h2>Your Booking Details</h2>
            <table>
                <tr>
                    {Object.keys(bookingState).map((index, key)=>{return <th key={key}>{index}</th>})}
                </tr>
                <tr>
                    {Object.keys(bookingState).map((index, key)=>{return <th key={key+4}>{bookingState[index]}</th>})}
                </tr>
            </table>
            </>
}
          </div>
          </div>
          <Footer></Footer>
        </>
    )
}
export default ConfirmedBooking ;