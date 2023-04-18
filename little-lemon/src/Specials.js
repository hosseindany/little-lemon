import React from 'react'
import Greeksalad from  './assets/greek salad.jpg';
import Bruchetta from './assets/bruchetta.svg'
import Lemondesert from './assets/lemon dessert.jpg'
import Card from "./Card";
function Specials(){
    return(
        <>
        <div>
            <h1>This week's specials! <button class="primary" style={{ "float": "right", "margin-top": "10px" }}>Reserve a table</button></h1>
        </div>
        <div style={{ "clear": "both" }}></div>
        <div id="cards">
                <Card img={Greeksalad} title='Greek Salad' price="$ 12.99" text='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '></Card>
                <Card img={Bruchetta} title='Bruchetta' price="$ 5.99" text='Our bruchetta is made from grilled bread that has been smeared with garlic snd seasoned with olive oil. '></Card>
                <Card img={Lemondesert} title='Greek Salad' price="$ 12.99" text={`This comes right from grandma's recipe book. Every last ingredient has been sourced and is as authentic as it gets.`}></Card>
            </div>
        </>
    )
}
export default Specials;