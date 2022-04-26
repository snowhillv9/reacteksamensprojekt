import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './nav';


export default function About(){
    let navigate = useNavigate();
    return (
        <div>
            <Nav/>
            <h1>About</h1>
            <div>
            <h1><button onClick={()=>{navigate("/")}}>Go back to home page </button></h1>       
        </div>
        </div>
    )
}

