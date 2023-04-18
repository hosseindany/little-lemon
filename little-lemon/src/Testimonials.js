import React from 'react'
import TestimonialsItem from "./TestimonialsItem";
function Testimonials(props){
    return(
        <>
            <div class="testimonials-title">Testimonials</div><div className="testimonials">

                <TestimonialsItem stars={4} name="John Ramsey" text="I just wanted to let you know that I had one of the best dinners of my life last night…. at your restaurant!! It was a last minute thing and I love Chicken Cordon Bleu."></TestimonialsItem>
                <TestimonialsItem stars={5} name="James Nick" text="It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations."></TestimonialsItem>
                <TestimonialsItem stars={3} name="Raymond Robins" text="This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert."></TestimonialsItem>
                <TestimonialsItem stars={4} name="Alfredo Martini" text="Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights"></TestimonialsItem>
            </div>
        </>
    )
}
export default Testimonials;