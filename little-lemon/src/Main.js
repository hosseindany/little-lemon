import React from 'react'
import Card from './Card';
import Hero from './Hero';
import Heroimage from './assets/restauranfood.jpg';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Chicago from './Chicago';
function Main(){
    return(
        <main>
            <div class="hero-container">
                <div className="container">
                    <Hero image={Heroimage} h1="Little Lemon" h2="Chicago" text="We are a family owned mediterranean restaurant focused on traditional recipes served with a modern twist." button="Reserve a table"></Hero>
                </div>
            </div>
            <div class="cards-container">
                <div className="container">
                    <Specials></Specials>
                </div>
            </div>
            <div class="testimonials-container">
                <div className="container">
                    <Testimonials></Testimonials>
                </div>
            </div>
            <div class="chicago-container">
                <div className="container">
                    <Chicago></Chicago>
                </div>
            </div>
        </main>
    )
}
export default Main;