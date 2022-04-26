import About from "./about";
import Home from "./Home";
import Minigames from "./Minigames";
import React, { Fragment } from 'react'
import "./App.css";
import Nav from "./nav";
import {BrowserRouter, BrowserRouter as Router,Route,Link} from'react-router-dom';
import { Routes } from 'react-router-dom';


const Application = () =>{
    return (
        
        <div className="App">
          
          <Router>
          <div className="list">
              <ul>
                <Nav/>
              </ul>
            </div>
            <Routes>
              <Route exact path="/" element={<h1>Home Page</h1>} />
              <Route exact path="/Home" element={<Home/>} />
              <Route exact path="/About" element={<About/>} />
              <Route exact path="/Minigames" element={<Minigames/>} />
            </Routes>
            
          </Router>
        </div>
      );
}

export default Application;