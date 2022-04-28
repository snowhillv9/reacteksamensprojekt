import React, { useEffect, useState } from "react";

export default function SequenceMemory(targetEle){

    targetEle.addEventListener("click", _verifyClick);
      
    let boxLength = 9;
    let lastLimit = 1;
    let lastOrder = [];
    let btnele = "";
    let isRunning = false;

    function _getRandomSquare() {
        let min = 0;
        let max = boxLength;
        return Math.floor(Math.random() * (max - min)) + min;
      }
    function _blink(eleId, duration, idx = -1) {  //vi siger index -1, da et arrays størrelse altid går fra 0--> arrayets længde som f.eks i vores tilfælde vil gå fra 0-->8
        setTimeout(function () {
          let ele = document.getElementById(eleId);
          ele.classList.add("box__item--highlight");
    
          /**
           * remove the old class
           */
    
          setTimeout(function () {
            ele.classList.remove("box__item--highlight");
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

    tmpl += '<div  class ="box">';
    for (let idx = 0; idx < boxLength; idx++) {
      tmpl += `<div class="box__item" id=${idx} data-idx = ${idx}></div>`; //Bruger $ operatoren for at have multiline string.
    }
    tmpl += "</div>";
    targetEle.innerHTML = tmpl;

    return {
        render: render,
        start: start,
      };
    }
    let container = document.getElementById("root");
    let sm = new SequenceMemory(container);
    sm.render();

    let btn = document.querySelector(".start__btn");
    btn.addEventListener("click", function () {
    sm.start(btn);
    });
}
  
