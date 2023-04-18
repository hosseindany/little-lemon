import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import Home from './Home';
import { Link, Outlet  } from 'react-router-dom';

function Nav(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/reservation">Reservation</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default Nav;