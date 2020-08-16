import React, {useState, useEffect}from 'react';
import '../css/Header.css'
import moment from "moment"
 
const Header = () => {
    //sets the state used for displaying the time and date
    const [time, setTime] = useState(moment().format(`HH:mm:ss`))
    const [date, setDate] = useState(moment().format(`dddd MMMM Do`))
    //changes the state every 1000ms
    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000)
    //returns the useEffect funciton by resetting the interval 
    return function cleanup() {
       clearInterval(timerID)
    }
})
    //sets the state
    function tick() {
        setTime(moment().format(`HH:mm:ss`))
        setDate(moment().format(`dddd MMMM Do`))
    }

    return(
        <header>
        <div className="Time-nav">
                <p className="time-text">{time}</p>
                </div>

        <div className="Date-nav">
            <p className="Date-text">{date}</p>
            </div>
        </header>
    )
}

export default Header