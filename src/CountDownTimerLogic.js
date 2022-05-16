import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs){

    const timestampDayJS = dayjs(timestampMs);
    const nowDayjs = dayjs(); //Current timestamp
    if(timestampDayJS.isBefore(nowDayjs)) //Tjekker om timestampen er in the past or not
    {
        return{
            miliseconds: '000',
            seconds: '00',
            minutes: '00'
        }
    }

    return {
        miliseconds: getRemainingMiliseconds(nowDayjs, timestampDayJS),
        seconds: getRemainingSeconds(nowDayjs, timestampDayJS),
        minutes: getRemainingMinutes(nowDayjs, timestampDayJS)
    }
}

function getRemainingMiliseconds(nowDayjs, timestampDayJS){

    const miliseconds = timestampDayJS.diff(nowDayjs, 'miliseconds') %1000;
    
    console.log("remaining miliseconds")
    return padWithZeros(miliseconds,3);

}
function getRemainingSeconds(nowDayjs, timestampDayJS){
    const seconds = timestampDayJS.diff(nowDayjs, 'seconds') %60;
    console.log("remaining seconds")
    return padWithZeros(seconds,2);

        
}
function getRemainingMinutes(nowDayjs, timestampDayJS){
    const minutes = timestampDayJS.diff(nowDayjs, 'minutes');
    console.log("remaining minutes")
    return padWithZeros(minutes,2);

        
}

function padWithZeros(number, minLength){
    const numbersString = number.toString();
    if(numbersString.length >=  minLength) return numbersString;
    return "0".repeat(minLength - numbersString.length) + numbersString;
}