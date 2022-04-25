import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){

    const navStyle = {
        color: 'white'
    }
    return (
       <nav>
           <h3>Test</h3>
               <ul className='nav-links'>
                   <Link style={navStyle} to='Home'>
                   <li>Home</li>
                   </Link>
                   <Link style={navStyle} to="About">
                   <li>About</li>
                   </Link>
                   <Link style={navStyle} to="Minigames">
                   <li>Minigames</li>
                   </Link>
               </ul>  
       </nav>
    )
}
export default Nav;