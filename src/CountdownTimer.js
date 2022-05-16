import React, { useEffect } from "react";
import { useState, useRef } from "react";




function CountdownTimerApp(){



const intervalRef = useRef(null);


//Vores state for timeren.
const [timer,setTimer] = useState("00.00");



//Dette vil compute forskellen imellem target timer og den current timer vi har

function getTimeRemaining(endtime){

    
    const total = Date.parse(endtime) - new Date().getTime();
    console.log(total);
    
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const day = hours * 24;

    // const textHour = Math.floor((total % day) / hours);
    // const textMinute = Math.floor((total % hours) / minutes);
    const textSecond = Math.floor((total % minutes) / seconds);
    const textMilisecond = Math.floor((total%seconds)); 

    console.log(textSecond);
    
    
    return{
        total, textSecond, textMilisecond
    };
}
//opdaterer timeren og stopper den, når den når 0
function startTimer(deadLine){
    let {total,textSecond,textMilisecond} = getTimeRemaining(deadLine);
    if(total<0){
        setTimer("00.000")
    }
    if(total>=0){
        //opdaterer timeren og tjekker om den er større end 9, så er vi nødt til at 
        //tilføje et 0 i begyndelsen af variablen.
        setTimer(
            // (textHour> 9 ? textHour : '0'+textHour) + ':' + 
            // (textMinute > 9 ? textMinute : '0'+textMinute) + ':' + 
            (textSecond > 9 ? textSecond : '0'+textSecond) + '.' + 
            (textMilisecond > 9 ? textMilisecond : '0'+textMilisecond) 
        )
    }else{
        //We need to use useRef to let the parent component update its child component
        clearInterval(intervalRef.current);
    }
}

//restter timeren og starter fra start timeren
//vi kan også kalde på den her metode hver gang at et nyt spil starter
function clearTimer(endtime){
 setTimer('30.000');
 if(intervalRef.current) clearInterval(intervalRef.current);
 const id = setInterval(()=>{
    startTimer(endtime)
 },100)
 intervalRef.current = id;
}

function getDeadlineTime(){
    let deadLine = new Date();
    deadLine.setSeconds(deadLine.getSeconds()+ 30);
    return deadLine;
}

useEffect(()=>{
clearTimer(getDeadlineTime());
//dette ville blive kørt når komponentet unmounter
//Vi er nødt til at være sikre på at vi ikke får et memory leak, ellers crasher applikationen
return() => {if(intervalRef.current) clearInterval(intervalRef.current)}
},[]) //Bruger et empty array for at agerere som componentDidMount kun.

function onClickResetBtn(){
    //Siden vi ikke ved om intervallet stadigvæk kører er vi nødt til at cleare det først.
    //Derfor er nedenstående linje meget vigtig for at undgå memory leak.
    //Dette er også grunden til at det bliver gjort adskillige gange.
    if(intervalRef.current) clearInterval(intervalRef.current);
    clearTimer(getDeadlineTime());
}
return (
    <div>

        <h4>Time Remaining:{timer}</h4>
     
      <button onClick={onClickResetBtn}>Start Game</button>
    </div>
    
)
}

export default CountdownTimerApp; 


















//We need to use useRef to let the parent component update its child component
// export default function Counter(){

//     const[timer, setTimer] = useState("00:00");
//     const[timeToUpdateTime, setUpdateTimer] = useState(new Date());

//     useEffect(() =>{
//         let currentTime = new Date();
//         setTimer(currentTime.getTime() + 60);
//     },[])
//     let countDown = new Date();
//     let timeRemaining = timer-countDown.getTime();

//     function updateTime(){
       
//       setUpdateTimer(new Date());
//     }

//     return(
//         <div>
//             <p> Time left: {timeRemaining}</p>
//         </div>
//     )
// }







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