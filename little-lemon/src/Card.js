
import React from 'react'
function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt={props.title} />
            <div className="card-title">
                <div>{props.title}</div>  <div>{props.price}</div>
            </div>
            <div className="card-text">{props.text}</div>
            <div className="card-footer">Order a delivery</div>
        </div>
    )
}
export default Card;