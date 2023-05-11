import React from 'react'
import logo from  './assets/Logo.svg'
function Footer(){
    return(
        <footer>
            <div className="container">
            <div className="footer-container">
            <div>
            <h2>
            </h2>
                <img src={logo}/></div>
            <div>
                <h2>Navigation</h2>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Reservations</p>
                <p>Order online</p>
            </div>
            <div>
            <h2>Contact</h2>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div>
            <h2>Social media</h2>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer;