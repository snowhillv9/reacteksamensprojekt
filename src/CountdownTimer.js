import React, { useEffect } from "react";
import { useState } from "react";
import {getRemainingTimeUntilMsTimestamp} from "./CountDownTimerLogic";


let defaultRemainingTime = {
    miliseconds: '00',
    seconds: '00',
    minutes: '01',
}

export default function Counter(){

    const[timer, setTimer] = useState(0);
    const[timeToUpdateTime, setUpdateTimer] = useState(new Date());

    useEffect(() =>{
        let currentTime = new Date();
        setTimer(currentTime.getTime() + 60);
    },[])
    let countDown = new Date();
    let timeRemaining = timer-countDown.getTime();

    function updateTime(){
       
      setUpdateTimer(new Date());
    }

    return(
        <div>
            <p> Time left: {timeRemaining}</p>
        </div>
    )
}







// const CountdownTimer =({countDownTimestampMS})=>{
//     const[remainingTime, setRemainingTime] = useState(defaultRemainingTime);

//     console.log("timer")

//     useEffect(()=>{
//     const intervalId = setInterval(() => {

//         console.log("use effect kaldes")
//         updateRemainingtime(countDownTimestampMS);
//        },100); 

//        return () => clearInterval(intervalId); //stopper en løbende interval funktion
//     },[countDownTimestampMS]);



//     function updateRemainingtime(countdown){
//        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));

       
//     console.log(countdown)
//     }
//     return (
//         <div className="countdown-timer">
//             <span> {remainingTime.minutes} </span>
//             <span> minutes </span>
//             <span> {remainingTime.seconds} </span>
//             <span> Seconds </span>
//             <span> {remainingTime.miliseconds} </span>
//             <span> miliseconds </span>
//         </div>
//     );
// }

// export default CountdownTimer;