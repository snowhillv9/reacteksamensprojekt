import React from 'react';
import Nav from "./nav";
import "./Button.css"
import { useNavigate } from 'react-router-dom';

export default function Minigames (){

    let navigate = useNavigate();
    return(
        
        <div>
            <h1>Minigames</h1>
            
           
            <div className='minigames'> 
            <button onClick={()=>{navigate("/SequenceMemoryGame")}}>To enter the squence memory game click here </button></div>
            <div className='button-grid'>
            <button >1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            </div>
            <div> <button onClick={()=>{navigate("/AimTrainer")}}>To enter the Aim Trainer game click here </button></div>
            <img src ="./Aimtrainer.PNG"></img>
        </div>
    )
}

