import React from 'react'
function Hero({image, button, text, h1, h2, children, className}){
    return(
        <div id="hero" className={className}>
        <div>
            {children}
            <h1 className="secondary">{h1}</h1>
            <h2 className="secondary">{h2}</h2>
            <p className="lead secondary">
                {text}
            </p>
             {!!button &&
            <button className="primary">{button}</button>
             }
        </div>
        <div>
             {!!image &&
            <div className="hero-image">
                <img src={image} />
            </div>
             }
        </div>
    </div>
    )
}
export default Hero;