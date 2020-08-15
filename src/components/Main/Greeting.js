import React, {useState, useEffect} from 'react'
import '../css/Greeting.css'
import moment from 'moment'

const Greeting = () =>{
    const [time, setTime] = useState(moment().format(`HH`))
    let theGreet;
    

    return(
        <div className="greeting">
            <p className="greeting-text">{theGreet}</p>
        </div>
    )
}
export default Greeting;