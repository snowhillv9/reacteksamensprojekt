import About from "./about";
import Home from "./Home";
import React from 'react'
import Minigames from "./Minigames";
import "./App.css";
import Nav from "./nav";
import {BrowserRouter as Router, Link, Route} from'react-router-dom';
import { Routes } from 'react-router-dom';


function App(){
    return(
        <>
       <Router>
           <div className="App">
               <Nav/>
           <Route path='/' element={<Home/>} />
           <Route path='/About' element={<About/>} />
           <Route path='/Minigames' element={<Minigames/>} />
           </div>
       </Router>
       </>
    );
}

export default App;