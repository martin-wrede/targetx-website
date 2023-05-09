import React, {useState, useEffect } from 'react'
import { ReactComponent as ArrowRight } from '../assets/pfeil-links.svg';
import { ReactComponent as ArrowLeft } from '../assets/pfeil-rechts.svg';
// import Image01 from '../assets/Home-01.jpg'

let timerID = 0
export default function Gallery({img1, img2,img3,img4, img5, project, amount}){
    const [counter, setCounter] = useState(0)
 
    const images = [img1, img2, img3, img4, img5];



    useEffect(() => {
      
        timerID +=1
        const timer = setInterval(()=> {
            setCounter((currentCounter) =>{
               // console.log(`Timer ID: ${timerID} - ${currentCounter}`)
                 
                if(currentCounter  >= (amount -1) ) {
                 //   nextImage2()
                    setCounter(0)
                    timerID = 0   
                }
              // fade in
             // photo gallery
                nextImage1()
                // Blending white
                nextImage2(1)
                console.log("nextImage2(0)")
                
                return currentCounter + 1
                
            })
        }, 1000)
        
    
        return () => {
           clearInterval(timer)
        }
        
    },[])

    // Blend effects

    function nextImage2(toggle){
        document.getElementById("layer2").style.opacity = toggle
       document.getElementById("layer2").style.transitionDuration = '0.2s'
    }  
    

    function nextImage1(){
       document.getElementById("layer1").style.opacity = 1  
        document.getElementById("layer1").style.transitionDuration = '0.5s'
    }  


    return (        
        <div id="gallery1">
      {counter} 
      <div id="layer2" style={{ height: '580px', width: '1000px', background: 'white', position: 'absolute', 
      zIndex: '2', opacity: '1' }}>
       
      </div>
      <div id="layer1" style={{ background: 'yellow', position: 'relative', zIndex: '0', opacity: '0' }}>
        <img id="image1" src={images[counter]} />
         

        </div>  {project}
           {amount}
           <br/>

        </div>
    )
}