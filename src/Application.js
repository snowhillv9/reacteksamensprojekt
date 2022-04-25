import About from "./about";
import Home from "./Home";
import React from 'react'
import Minigames from "./Minigames";
import Test from "./test";
import "./App.css";
import Nav from "./nav";
import {BrowserRouter, BrowserRouter as Router, Link, Route} from'react-router-dom';
import { Routes } from 'react-router-dom';


const Application = () =>{
    return(
        <>
        <BrowserRouter>
       <Routes>
           <div className="App">
               <Nav/>
           <Route path="/" element={<Home/>} />
           <Route path="/About" element={<About/>} />
           <Route path="/Minigames" element={<Minigames/>} />
           <Route path="/Test" element={<Test/>} />
           </div>
       </Routes>
       </BrowserRouter>
       </>
    );
}

export default Application;