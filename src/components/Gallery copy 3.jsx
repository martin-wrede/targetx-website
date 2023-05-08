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
                if(currentCounter > 2) {
                    nextImage1()               
                }
                if(currentCounter >= amount  ) {
                    nextImage2()
                    setCounter(0)
                   
                    timerID = 0
                 
                }
                return currentCounter + 1
               
            })
        },2000)
        return () => {
            clearInterval(timer)
        }
    },[])

    function nextImage1(){
        document.getElementById("layer0").style.opacity = 1  
        document.getElementById("layer0").style.transitionDuration = '0.5s'
    }  

    function nextImage2(){
     
        document.getElementById("layer0").style.opacity = 1 
        document.getElementById("layer0").style.transitionDuration = '0.5s'
    }  
    
    return (        
        <div id="gallery1">
      {counter} .
      <div id="layer0" style={{ background: 'red', position: 'absolute', zIndex: '1', opacity: '0' }}>
        <img src={images[counter + 1]} />
      </div>
      <div id="layer1" style={{ background: 'yellow', position: 'absolute', zIndex: '0' }}>
        <img id="image1" src={images[counter]} />
         

        </div>  {project}
           {amount}
        </div>
    )
}