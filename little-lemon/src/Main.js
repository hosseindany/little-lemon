import React from 'react'
import Card from './Card';
import Hero from './Hero';
import Heroimage from './assets/restauranfood.jpg';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Chicago from './Chicago';
import { useState } from 'react';
function Main(){

    return(
        <main>
            <div className="hero-container">
                <div className="container">
                    <Hero image={Heroimage} h1="Little Lemon" h2="Chicago" text="We are a family owned mediterranean restaurant focused on traditional recipes served with a modern twist." button="Reserve a table"></Hero>
                </div>
            </div>
            <div className="cards-container">
                <div className="container">
                    <Specials></Specials>
                </div>
            </div>
            <div className="testimonials-container">
                <div className="container">
                    <Testimonials></Testimonials>
                </div>
            </div>
            <div className="chicago-container">
                <div className="container">
                    <Chicago></Chicago>
                </div>
            </div>
        </main>
    )
}
export default Main;