import React from 'react';
import "./about.css";
import mig from "./mig.jpg";
import Sami from "../pictures/Sami.jpg";
import Oscar from "./Oscar.jpg";


export default function About() {
    return (
        <div className='container'>
            <h1>About us</h1>
            <p>Vi er 4 semester elver på EA Dania Datamatiker linje, hvor vi har fået til eksamensprojekt, 
             at vi skal lave et react produkt som er dette hjemmeside nedde under 
             vil man kunne se de forskellige medlemmer   </p>
         <div className='gridbox'>  
         <div className="billedeAfSoren">
         <img src={mig} width="200" height="150" alt="" />
         <p> Søren Scheer Snoghøj</p>
          <p>TLF: +45 60682870</p>
          <p>Email: Sorensnoghoj@hotmail.com </p>
          </div>
          
          <div className='billedeAfSami'>
            <img src={Sami} width="200" height="150" alt="" />
            <p> Sami Amir Assad</p>
          <p>TLF: +45 42212165</p>
          <p>Email: Sami.amir.assad@gmail.com</p>
            </div>
          
          <div className="billedeAfOscar">
            <img src={Oscar} width="200" height="150" alt="" />
            <p>Oscar Kreie Olesen </p>
          <p>TLF: +45 30139984</p>
          <p>Email: Oscarkreie@gmail.com</p>
          </div>
          
          </div>
        </div>
        
            
    
    );
}
