import React, { useState } from 'react'
import BookingForm from './BookingForm';
import { MetaTags } from 'react-meta-tags';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom';
import Heroimage from './assets/restauranfood.jpg';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Chicago from './Chicago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function BookingPage({bookingState, handler}){
    
    const navigate = useNavigate();
    return (
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
          <BookingForm handler={handler} ></BookingForm>

          </div>
          <Footer></Footer>
        </>
    )
}
export default BookingPage;