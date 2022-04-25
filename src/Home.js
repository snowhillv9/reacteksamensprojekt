import React from 'react';
import mig from "./mig.jpg"

const Home = () =>{
    return(
        <div>
            <h1>Home</h1>
            <div className="logo">
          <img src={mig} width="100" height="50" />
        </div>
           
        </div>
    )
}

export default Home;