import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TestimonialsItem(props){
    const n = props.stars;
    return(

        <div className="item">
            <div className="rating">
            {[...Array(n)].map((e, i) => <FontAwesomeIcon icon="fa-regular fa-solid fa-star" size="xl" key={i} color="#F4CE14" />)}
            </div>
            <div className="user-pic">
            <FontAwesomeIcon icon="fa-solid fa-user" size="5x" />
            <span>{props.name}</span>
            </div>
            <p className="review-text">{props.text}</p>
        </div>

    )
}
export default TestimonialsItem;