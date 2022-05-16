import React, { useEffect } from "react";
import { useState, useRef } from "react";




function CountdownTimerApp(){



const intervalRef = useRef(null);


//Vores state for timeren.
const [timer,setTimer] = useState("00:00:00");



//Dette vil compute forskellen imellem target timer og den current timer vi har

function getTimeRemaining(endtime){

    
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total/1000)%60);
    const minutes = Math.floor((total/60)%60);
    const hours = Math.floor((total/1000*60*60)%24);
    
    return{
        total, seconds, minutes, hours
    };
}
//opdaterer timeren og stopper den, når den når 0
function startTimer(deadLine){
    let {total, hours, minutes, seconds} = getTimeRemaining(deadLine);
    if(total>=0){
        //opdaterer timeren og tjekker om den er mindre end 10, så er vi nødt til at 
        //tilføje et 0 i begyndelsen af variablen.
        setTimer(
            (hours> 9 ? hours : '0'+hours) + ':' + 
            (minutes > 9 ? minutes : '0'+minutes) + ':' + 
            (seconds > 9 ? seconds : '0'+seconds)
        )
    }else{
        //We need to use useRef to let the parent component update its child component
        clearInterval(intervalRef.current);
    }
}

//restter timeren og starter fra start timeren
//vi kan også kalde på den her metode hver gang at et nyt spil starter
function clearTimer(endtime){
 setTimer('00:00:30');
 if(intervalRef.current) clearInterval(intervalRef.current);
 const id = setInterval(()=>{
    startTimer(endtime)
 },1000)
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
        {timer}
      <button onClick={onClickResetBtn}>Reset</button>
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