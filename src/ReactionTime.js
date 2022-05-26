import React from 'react';
import './ReactionTime.css';


    

    export default function ReactionTime()
{
    function getRandomColor() {
				
        var letters = "0123456789ABCDEF".split('');
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        } 
        return color; 
    
    
    } 
    
    
    var clickedTime; var createdTime; var reactionTime; 
    
    function makeBox() {
            var time=Math.random();
            time=time*3000;
        
        setTimeout(function() {
        
            if (Math.random()>0.5) {
            
                document.getElementById("box").style.borderRadius="100px";
                
                } else {
                
                    document.getElementById("box").style.borderRadius="0";
                }
                        
            document.getElementById("box").style.backgroundColor=getRandomColor();
        
            document.getElementById("box").style.display="block";
            
            createdTime=Date.now();
            
        }, time); 
    
    }
    
    document.getElementById("box").onclick=function() {
        console.log ("123")

    
        clickedTime=Date.now();
        
        reactionTime=(clickedTime-createdTime)/1000;
        
        document.getElementById("printReactionTime").innerHTML="Your Reaction Time is: " + reactionTime + "seconds";
        
        
        makeBox();
        
        
    }
    
    makeBox(); 

    return(
        <h1>
            <p>Click on the objects as fast as possible and get your reaction score</p>
            <p id="printReactionTime"></p>
            <div id="box"></div>
        </h1>
    )

}