import React, { useEffect, useState } from "react";
import "./sequenceMemoryGame.css";




export default function SequenceMemory(targetEle){

  // targetEle.addEventListener("click", _verifyClick);
    
  let boxLength = 9;
  let lastLimit = 1;
  let lastOrder = [];
  let btnele = "";
  let isRunning = false;

  return (

    <>
    <h1>XD XD XD</h1>
    <main>
      <div id="container"></div>
      <br />
      <button  className="start__btn">Start</button>
    </main>
    {start}
    {render}
    </>
  )

  function _getRandomSquare() {
      let min = 0;
      let max = boxLength;
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
  function _blink(eleId, duration, idx = -1) {  //vi siger index -1, da et arrays størrelse altid går fra 0--> arrayets længde som f.eks i vores tilfælde vil gå fra 0-->8
      setTimeout(function () {
        let ele = document.getElementById(eleId);
        ele.classList.add("box__item--highlight"); //Tilføjer et eller flere elementer til css klasse listen
  
  
        setTimeout(function () {
          ele.classList.remove("box__item--highlight");  //Fjerner highlight igen, da brugeren nu har fået tid til at se et felt
      
          if (idx == -1) {
            isRunning = false;
          }
          if (idx == lastOrder.length - 1) {
            isRunning = false;
          }
        }, 500);
      }, duration);
    }

    function _verifyClick(event) {
      if (
        !event.target.classList.contains("box__item") ||
        lastOrder.length == 0 ||
        isRunning
      ) {
        return;
      }
  
      let ele = event.target;
  
      if (Number(ele.dataset.idx) == lastOrder[0]) { //Number er et indbygget Interface, der laver tallet om til en string  //Tager det første elemenet i datasettet altså i vores order array.
        _blink(Number(ele.dataset.idx), 0);
        lastOrder.shift(); //Indbygget funktion i bibliotek, der returnerer en kopi af en sektion af et array. Skriver man ikke noget inde i parameteren vil den bare starte fra index 0.
  
        /**
         * kalder den næste gang
         */
        if (lastOrder.length == 0) {
          lastLimit++;
          setTimeout(start, 2000);
        }
        return;
      }
        /**
   * incase selection er forkert
   */
  ele.classList.add("box__item--highlightwrong");
  setTimeout(function () {
    ele.classList.remove("box__item--highlightwrong");
  }, 500); //
  targetEle.classList.add("moveanimation");

  /**
   resetter variablerne, da brugeren lige har begået en fejl og nu skal starte forfra
   
   */
  lastLimit = 1;
  lastOrder = [];
  
}

function start(ele) {
  isRunning = true;
  if (ele) {
    btnele = ele;

    targetEle.classList.remove("moveanimation");
  }

  for (let limit = 0; limit < lastLimit; limit++) {
    lastOrder.push(_getRandomSquare());
  }
  console.log(lastOrder);

  for (let idx = 0; idx < lastOrder.length; idx++) {
    _blink(lastOrder[idx], idx * 1000, idx);
  }
}

function render() {
  let tmpl = "";
 tmpl += `<div className= "flex justify-spacebetween m-b-10">    
 <div className="flex">
   Score :
   <span id="score">
     0
   </span>
 </div>`;

  tmpl += '<div  className ="box">';
  for (let idx = 0; idx < boxLength; idx++) {
    tmpl += `<div className="box__item" id=${idx} data-idx = ${idx}></div>`; //Bruger $ operatoren for at have multiline string.
  }
  tmpl += "</div>";
  targetEle.dangerouslySetInnerHTML = tmpl;

 return{
   render: render,
   start: start

 };
  }
}



// const SequenceMemory =() =>{

    
//     const [squaresToRemember,setSquares] = useState([]);
//     const handleClick = () =>{
//         console.log("starting game");
//     } 
//    return (
//     <div className="SequenceMemory">
      
//         <button onClick={handleClick}>Start game</button>
//         <div className='button-grid'>
//             <button>1</button>
//             <button>2</button>
//             <button>3</button>
//             <button>4</button>
//             <button>5</button>
//             <button>6</button>
//             <button>7</button>
//             <button>8</button>
//             <button>9</button>
//             </div>
//     </div>
//    ); 

//    function AppHooks() {
//     const buttonNames = [
//       {
//         namebutton: 1
//       },
//       {
//         namebutton: 2
//       },
//       {
//         namebutton: 3
//       },
//       {
//         namebutton: 4
//       },
//       {
//         namebutton: 5
//       },
//       {
//         namebutton: 6
//       },
//       {
//         namebutton: 7
//       },
//       {
//         namebutton: 8
//       },
//       {
//         namebutton: 9
//       },
//     ];
//    }
// }



// // }



// export default SequenceMemory;