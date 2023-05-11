import React from 'react'
import img1 from './assets/restaurant.jpg'
import img2 from './assets/restaurant chef B.jpg'
function Chicago(){
    return(
        <div id="chicago">
        <div>
            <h1 className="primary">Little Lemon</h1>
            <h2 className="primary">Chicago</h2>
            <p className="lead primary">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </p>
        </div>
        
        <div className="chicago-image">
            <img src={img1}/>
            <img src={img2}/>
        </div>
        
    </div>
    )
}
export default Chicago;