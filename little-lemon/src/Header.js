import React from 'react'
import logo from './assets/Logo.svg'
import Nav from './Nav';
import basket from './assets/Basket.svg'
function Header(){
    return(
        <header className="container">
            <div className="logo">
                <a href="/"><img src={logo} alt="little lemon"/></a>
            </div>
            <Nav></Nav>
            <img src={basket} alt="basket" style={{'width':'25px'}}/>
        </header>
    )
}
export default Header;