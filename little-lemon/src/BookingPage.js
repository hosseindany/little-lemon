import React from 'react'
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
function BookingPage(){
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
          <div className='reservation'>
            <div className="reservation-number">
                <h2>
                    NUMBER OF DINERS
                </h2>
                <div style={{'display':'flex', 'justifyContent': 'space-between'}}>
                <div>
                <FontAwesomeIcon onClick={() => navigate(-1)} className='primary-text' icon="fa-solid fa-user" size="2xl"  />
                <h2 style={{'display':'inline', 'marginLeft':'35px'}}>2</h2>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-minus-circle" size="2xl" style={{'marginRight':'35px'}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-solid fa-plus-circle" size="2xl" ></FontAwesomeIcon>
                </div>
                </div>
            </div>
            <div className="reservation-date">
                <h2>
                    DATE
                </h2>
                <div style={{'borderRadius': '5px', 'background':'#D9D9D9', 'display':'flex', 'justifyContent': 'space-around'}}>
                    <div className='date-cell'>
                        <div className="day-of-month">15</div>
                        <div className="day-of-week">Sun</div>
                    </div>
                    <div className='date-cell'>
                        <div className="day-of-month">16</div>
                        <div className="day-of-week">Mon</div>
                    </div>
                    <div className='date-cell'>
                        <div className="day-of-month">17</div>
                        <div className="day-of-week">Tue</div>
                    </div>
                    <div className='date-cell'>
                        <div className="day-of-month">18</div>
                        <div className="day-of-week">Wed</div>
                    </div>
                    <div className='date-cell'>
                        <div className="day-of-month">19</div>
                        <div className="day-of-week">Thu</div>
                    </div>
                </div>
            </div>
            <div className="reservation-time">
                <h2>
                    TIME SLOT
                </h2>
                <div style={{'borderRadius': '5px', 'background':'#D9D9D9', 'display':'flex', 'justifyContent': 'space-around'}}>
                    <div className='time-cell'>
                        12:00
                    </div>
                    <div className='time-cell'>
                        12:30
                    </div>
                    <div className='time-cell'>
                        13:00
                    </div>

                </div>
            </div>
          </div>
          <button class="primary call">Reserve a table</button>
          </div>
          <Footer></Footer>
        </>
    )
}
export default BookingPage;