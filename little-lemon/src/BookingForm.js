import React, {useEffect} from 'react'
import { useState } from 'react';
import { useTimeUpdater } from './App';
import { useNavigate } from 'react-router-dom';
function BookingForm(props){
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(undefined);
    const [booking, setBooking] = useState(undefined);
    const [number, setNumber] = useState(undefined);
    const [occasion, setOccasion] = useState(undefined);
    let [availableTimes, dispatch]  = useTimeUpdater(undefined);
    const  [error, setError] = useState({});
    const updateBooking = ()=>{
        setBooking({date, time, number, occasion});
    }
    const updateDate = (e)=>{
        setDate(e.target.value);
    }
    const updateTime = (e)=>{setTime(e.target.value, )}
    const updateNumber = (e)=>{setNumber(e.target.value)}
    const updateOccasion = (e)=>{setOccasion(e.target.value)}
    const ValidateForm = ()=>{
        let localError ={...error};
        if (typeof date == 'undefined') (localError={...localError, date : 'Date must be chosen'}); else {
            delete localError.date;
           }
        let difference = (new Date(date) - new Date())
        let dayDifference = Math.ceil(difference / (1000 * 3600 * 24))
        if (dayDifference>7) (localError={...localError, date : 'Reservation date must be within 7 days from today'}); else {
            console.log(date)
            delete error.date
        }
        if (typeof time == 'undefined') (localError={...localError, time : 'Time must be chosen'}); else {
            delete localError.time;
        }
        if (typeof number == 'undefined') (localError={...localError, number : 'Number of guests must be chosen'}); else {
            delete localError.number;
        }
        if (typeof occasion == 'undefined') (localError={...localError, occasion : 'Occasion must be chosen'}); else {
            delete localError.occasion;
        }
        setError(localError)
        return Object.keys(localError).length === 0
    }
    const handleSubmit = e => {
        e.preventDefault();

        //
        if(ValidateForm()){
            props.handler({date, time, number, occasion});
            updateBooking();
        }
    }
    const requiredData = ()=>{
        return  Object.keys(error).length !== 0
    }
    useEffect(() => {
        const APITimes = window.fetchAPI(new Date(date))
        dispatch({times: APITimes})
      }
      ,[date])
    useEffect(() => {
    ValidateForm()
    }
    ,[date,time,number,occasion])

    return(
<>
<h1>Book Now</h1>
<form onSubmit={handleSubmit} style={{"display": "grid", "maxWidth": "200px", "gap": "20px"}}>
    <label htmlFor='res-date'>Choose date</label>
    <input onChange={updateDate} type="date" id="res-date" min="2023-05-08" max="2023-08-08" required aria-label="Reservation date" />
    <div data-testid='dateError' className='form-error'>{error['date']}</div>
   <label htmlFor="res-time">Choose time</label>
   <select onChange={updateTime} id="res-time" required ria-label="Reservation time">
    {availableTimes.map(i=><option key={i}>{i}</option>)}
   </select>
   <div data-testid='timeError' className='form-error'>{error['time']}</div>
   <label htmlFor="guests">Number of guests</label>
   <input onChange={updateNumber} type="number" placeholder="1" min="1" max="10" id="guests" ria-label="Number of guests" />
   <div data-testid='numberError' className='form-error'>{error['number']}</div>
   <label htmlFor="occasion">Occasion</label>
   <select onChange={updateOccasion} id="occasion" ria-label="Reservation occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <div data-testid='occasionError' className='form-error'>{error['occasion']}</div>
   <input disabled={requiredData()} data-testid="submit" type="submit" className="btn primary call" value="Make Your reservation" ria-label="On Click"></input>
</form>
</>
    )
}
export default BookingForm;