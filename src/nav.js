import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){

    const navStyle = {
        color: 'white'
    }
    return (
       <nav>
           <h3>Home Page</h3>
               <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Home">Home</Link></li>
                <li><Link to="About">About</Link></li>
                <li><Link to="Minigames">Minigames</Link></li>
                <li><Link to="ErrorPage">*</Link></li>
               </ul>  
       </nav>
    )
}
export default Nav;