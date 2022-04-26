import React from 'react';
import Nav from "./nav";
import mig from "./mig.jpg";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <div className="billedeAfSoren">
          <img src={mig} width="100" height="50" />
          </div>
        </div>
        
    );
}
