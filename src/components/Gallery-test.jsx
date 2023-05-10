import React, {useState, useEffect } from 'react'

 import { ReactComponent as ArrowRight } from '../assets/pfeil-links.svg';
import { ReactComponent as ArrowLeft } from '../assets/pfeil-rechts.svg';
import White from  '../assets/gallery-white.jpg';
import PfeilLinks from '../assets/pfeil-links.svg';
import PfeilRechts from '../assets/pfeil-rechts.svg';



let timerID = 0

export default function Gallery({img1, img2, img3, img4, img5, project, amount }){
    const [counter, setCounter] = useState(0)
 
    const images = [img1, img2, img3, img4, img5];

    useEffect(() => { 
        timerID +=1
  
        const timer = setInterval(()=> {
            setCounter((currentCounter) =>{
               // console.log(`Timer ID: ${timerID} - ${currentCounter}`)
              
                if(currentCounter  >= 10*(amount)-1 ) {
                    setCounter(0)
                    timerID = 0   
                }
                if((currentCounter+3) % 10 === 0){  
                  nextImage2(1)
                }
                if(currentCounter % 10 === 0){ 
                     nextImage2(0)
                }
         
                return currentCounter + 1    
            })
        }, 200)

        return () => {
           clearInterval(timer)
        }      
    },[])

    // Blend effect
    function nextImage2(toggle){
        document.getElementById("layer2").style.opacity = toggle
        document.getElementById("layer2").style.transitionDuration = '0.5s'
    }  
  
    return (      

        <div id="gallery1">

            
   
        {/*
        {counter} 
       */}
         <div>
         {Math.floor(counter/10) +1 }/{amount}
         </div>
        <div id="layer2" ><img src={White} /></div>
        <div id="layer1"  >
        <img 
         // src={images[1]}
          src={images[Math.floor(counter/10)]}
           />
        </div>  
       {/*        
         {project}
       */}
         
          
          

        </div>
        
    )
}