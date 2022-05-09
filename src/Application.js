import About from "./about";
import Home from "./Home";
import Minigames from "./Minigames";
import React, { Fragment } from 'react'
import "./App.css";
import Nav from "./nav";
import SequenceMemory from "./sequenceMemory";
import MemoryGame from "./MemoryGame";
import {BrowserRouter, BrowserRouter as Router,Route,Link} from'react-router-dom';
import { Routes } from 'react-router-dom';
import ErrorPage from "./ErrorPage";
import ReactionTime from "./ReactionTime";


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
              <Route path="/" element={<h1>Home Page</h1>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Minigames" element={<Minigames/>} />
              <Route path="/Reactiontime" element={<ReactionTime/>} />
              <Route path="/SequenceMemoryGame" element={<SequenceMemory/>} />
              <Route path="/MemoryGame" element={<MemoryGame/>} />
              <Route path="/*" element={<ErrorPage/>} />
            </Routes>
            
          </Router>
        </div>
      );
}

export default Application;