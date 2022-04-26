import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){

    const navStyle = {
        color: 'white'
    }
    return (
       <nav>
           <h3>Human Benchmark</h3>
               <ul className='nav-links'>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="Home">Profile</Link></li>
                <li><Link to="About">About</Link></li>
                <li><Link to="Minigames">Minigames</Link></li>
               </ul>  
       </nav>
    )
}
export default Nav;