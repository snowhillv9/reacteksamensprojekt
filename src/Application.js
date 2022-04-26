import About from "./about";
import Home from "./Home";
import React, { Fragment } from 'react'
import Minigames from "./Minigames";
import ErrorPage from "./ErrorPage";
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
       <Route exact path="/" element={<Nav/>} />
           <Route exact path="/Home" element={<Home/>} />
           <Route exact path="/About" element={<About/>} />
           <Route exact path="/Minigames" element={<Minigames/>} />
           <Route path="*" element={<ErrorPage/>} />
       </Routes>
           </div>
       </Router>
       </>
    );
}

export default Application;