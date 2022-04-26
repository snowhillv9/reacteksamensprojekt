import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nav from './nav';

const Home = () =>{

    let navigate = useNavigate();

    return(
    
        <div>
            <Nav/>
            <h1><button onClick={()=>{navigate("/")}}>Go back to home page </button></h1>       
        </div>
    )
}

export default Home;