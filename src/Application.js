import About from "./about";
import Home from "./Home";
import React, { Fragment } from 'react'
import Minigames from "./Minigames";
import "./App.css";
import Nav from "./nav";
import {BrowserRouter, BrowserRouter as Router,Route} from'react-router-dom';
import { Routes } from 'react-router-dom';


const Application = () =>{
    return(
        <>
        <Router>
           <div className="App">
       <Routes>
       <Route path="/" element={<Nav/>} />
           <Route path="/" element={<Home/>} />
           <Route path="/About" element={<About/>} />
           <Route path="/Minigames" element={<Minigames/>} />
       </Routes>
           </div>
       </Router>
       </>
    );
}

export default Application;