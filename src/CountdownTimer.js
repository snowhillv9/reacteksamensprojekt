import React, { useEffect } from "react";
import { useState, useRef } from "react";
import ButtonState from "./buttonAimTrainCounter";




function CountdownTimerApp(props){



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
        props.setCanBeClicked(false);
    }
    if(total>=0){
        props.setCanBeClicked(true);
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
    //Dette er også grunden til at det bliver gjort adskillige gange.'


    props.resetTargetCounter();
    if(intervalRef.current) clearInterval(intervalRef.current);
    clearTimer(getDeadlineTime()); 
    
}

return (
    
    <div>
        
        <h4>Time Remaining:{timer}</h4> 
    <div>

      <button onClick={onClickResetBtn}>Reset Game</button>
    </div>
    </div>
    
)
}

export default CountdownTimerApp; 


















