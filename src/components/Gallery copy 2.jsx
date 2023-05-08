import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowRight } from '../assets/pfeil-links.svg';
import { ReactComponent as ArrowLeft } from '../assets/pfeil-rechts.svg';

export default function Gallery({ img1, img2, img3, img4, img5, project, amount }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((currentCounter) => {
        if (currentCounter >= amount - 1) {
          return 0;
        } else {
          return currentCounter + 1;
        }
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [amount]);

  function nextImage1() {
    document.getElementById('layer0').style.opacity = 1;
    document.getElementById('layer0').style.transitionDuration = '0.5s';
  }

  function nextImage2() {
    document.getElementById('layer0').style.opacity = 0;
    document.getElementById('layer0').style.transitionDuration = '0.5s';
  }

  return (
    <div id="gallery1">
      <div
        id="layer0"
        style={{ background: 'red', position: 'absolute', zIndex: '1', opacity: '0' }}
      >
       <img src={counter === amount - 1 ? img1 : `../assets/Home-0${counter + 2}.jpg`} />
        
      </div>
      <div id="layer1" style={{ background: 'yellow', position: 'absolute', zIndex: '0' }}>
        <img id="image1" src={counter === 0 ? img1   : `../assets/Home-0${counter + 1}.jpg`} />
      </div>
      {project}
      {amount}
    </div>
  );
}