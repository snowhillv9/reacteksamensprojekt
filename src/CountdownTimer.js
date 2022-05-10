import React, { useEffect } from "react";
import { useState } from "react";
import {getRemainingTimeUntilMsTimestamp} from "./CountDownTimerLogic";


const defaultRemainingTime = {
    miliseconds: '00',
    seconds: '00',
    minutes: '01',
}



const CountdownTimer =({countDownTimestampMS})=>{
    const[remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(()=>{
      const intervalId = setInterval(() => {
        updateRemainingtime(countDownTimestampMS);
       },100); 

       return () => clearInterval(intervalId); //stopper en løbende interval funktion
    },[countDownTimestampMS]);



    function updateRemainingtime(countdown){
       setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
    return (
        <div className="countdown-timer">
            <span> {remainingTime.minutes} </span>
            <span> minutes </span>
            <span> {remainingTime.seconds} </span>
            <span> Seconds </span>
            <span> {remainingTime.miliseconds} </span>
            <span> miliseconds </span>
        </div>
    );
}

export default CountdownTimer;