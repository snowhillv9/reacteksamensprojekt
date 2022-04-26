import React from 'react';
import Nav from "./nav";
import "./Button.css"
import { useNavigate } from 'react-router-dom';

const Minigames = () =>{
    let navigate = useNavigate();

    return(
        <div>
            <Nav/>
            <h1>Minigames</h1>
            <div>
            <h1> <button onClick={()=>{navigate("/")}}>Go back to home page </button></h1>       
        </div>
            <div className='button-grid'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            </div>
        </div>
    )
}

export default Minigames;