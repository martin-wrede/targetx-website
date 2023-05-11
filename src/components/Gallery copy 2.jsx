import React, { useState, useEffect } from 'react';

import { ReactComponent as ArrowRight } from '../assets/pfeil-links.svg';
import { ReactComponent as ArrowLeft } from '../assets/pfeil-rechts.svg';
import White from '../assets/gallery-white.jpg';
import PfeilRechts from '../assets/pfeil-rechts.svg';
import Rechteck from '../assets/rechteck.svg';

let timerID = 0;

export default function Gallery({ img1, img2, img3, img4, img5, project, amount }) {
  const [counter, setCounter] = useState(0);
  const [startInterval, setStartInterval] = useState(true);

  const images = [img1, img2, img3, img4, img5];

 let timer = null; // Declare timer variable

  useEffect(() => {
    
    timerID += 1;

    timer = setInterval(() => {
      setCounter((currentCounter) => {
        if (currentCounter >= 10 * amount - 1) {
          setCounter(0);
          timerID = 0;
        }
        if ((currentCounter - 8) % 10 === 0) {
          nextImage1(0);
        }
        if (currentCounter % 10 === 0) {
          nextImage1(1);
        }

        return currentCounter + 1;
      });
    }, 400);

    return () => {
      clearInterval(timer);
      // setStartInterval(false)
    };
  }, []);

  // Blend effect
  function nextImage1(toggle) {
    document.getElementById('layer1').style.opacity = toggle;
    document.getElementById('layer1').style.transitionDuration = '0.5s';
  }

  return (
    <div id="gallery1">
      <div id="layer1">
        <img src={images[Math.floor(counter / 10)]} />
      </div>

      {(Math.floor(counter / 10) + 1) + '/' + amount}
      <div className='gallery-menu'>
        <img src={PfeilRechts} className='gallery-menu-icon' />
        <img src={Rechteck} onClick={() => clearInterval(timer)} className='gallery-menu-icon' />
      </div>

      {/*        
         {project}
       */}
    </div>
  );
}
