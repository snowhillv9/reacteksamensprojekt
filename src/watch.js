import React, { useEffect, useState } from "react";

function Watch(){

    let date = useDate();

    return(
        <h1>Current time: {date.toLocaleTimeString()}</h1>
    );
}

function useDate(){
    const [date, setDate] = useState(new Date());


    useEffect(() => {
      let intervalId =  setInterval(updateTime,1000);
        return() =>{
            clearInterval(intervalId);
        }
    })

    function updateTime(){
        setDate(new Date());
    }
    return date;
}

export default Watch;