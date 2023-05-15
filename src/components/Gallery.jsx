import React, { useState, useEffect, useRef } from 'react';

import PfeilLinks from '../assets/pfeil-links.svg' ;
import PfeilRechts from '../assets/pfeil-rechts.svg';
import Rechteck from '../assets/rechteck.svg';

let timerID = 0;

export default function Gallery({ img1, img2, img3, img4, img5, img6, project, amount }) {
  const [counter, setCounter] = useState(0);
  
  const images = [img1, img2, img3, img4, img5,  img6];
  const timerRef = useRef(null); // Use useRef to create a mutable reference

  useEffect(() => {
    timerID += 1;

    timerRef.current = setInterval(() => {
      setCounter((currentCounter) => {
        if (currentCounter >= 10 * amount - 1) {
          setCounter(0);
          timerID = 0;
        }
        if ((currentCounter - 8) % 10 === 0) {
          imageBlend(0);
        }
        if (currentCounter % 10 === 0) {
          imageBlend(1);
        }

        return currentCounter + 1;
      });
    }, 400);

    return () => {
      clearInterval(timerRef.current); // Use timerRef.current to clear the interval
    };
  }, []);

  function nextImageForward(nr) {
    setCounter((currentCounter) => {
    // if more then amount = 5 go back with 0
    if(currentCounter >= amount*10-10){
       return setCounter(0)
    }
    else {
        let newCounter = currentCounter + nr*10 ;
      //  console.log(newCounter);
        return setCounter(newCounter)
    }
    });
  }
  function nextImageBackward(nr) {
    setCounter((currentCounter) => {
    // if less then 10 go back with go to max amount, here 10
    if(currentCounter < 10){
        let newCounter = amount*10 + nr*10 ;
          return setCounter(newCounter)
    }
    else {
        let newCounter = currentCounter + nr*10 ;
        return setCounter(newCounter)
    }
    });
  }
  

  // Blend effect
  function imageBlend(toggle) {
    document.getElementById('layer1').style.opacity = toggle;
    document.getElementById('layer1').style.transitionDuration = '0.5s';
  }

  return (
    <div id="gallery1">
      <div id="layer1">
        <img id="galleryimage" src={images[Math.floor(counter / 10)]} />
      </div>

      
      <div className='gallery-menu'>
        <img src={PfeilLinks}  id="backward"
       
        onClick={() => nextImageBackward(-1)} className='gallery-menu-icon' />
        <span className='gallery-text'>{(Math.floor(counter / 10) + 1) + '/' + amount} </span>
        <img src={PfeilRechts} id="forward" onClick={() => nextImageForward(1)} className='gallery-menu-icon' />
        {/* 
        <img src={Rechteck} id="stop" onClick={() => clearInterval(timerRef.current)} className='gallery-menu-icon' />
        */}
        </div>

      {/*        
         {project}
       */}
    </div>
  );
}