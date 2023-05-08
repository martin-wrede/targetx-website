import React, {useState, useEffect } from 'react'
import { ReactComponent as ArrowRight } from '../assets/pfeil-links.svg';
import { ReactComponent as ArrowLeft } from '../assets/pfeil-rechts.svg';
// import Image01 from '../assets/Home-01.jpg'
 
let timerID = 0
export default function Gallery({img1, img2, project, amount}){
    const [counter, setCounter] = useState(0)
    const [image, setImage] = useState([])

    useEffect(() => {
        timerID +=1
        const timer = setInterval(()=> {
            setCounter((currentCounter) =>{
               // console.log(`Timer ID: ${timerID} - ${currentCounter}`)
                if(currentCounter > 3) {
                    nextImage1()               
                }
                if(currentCounter > 4) {
                    nextImage2()
                    setCounter(0)
                    timerID = 0
                }
                return currentCounter + 1
               
            })
        },500)
        return () => {
            clearInterval(timer)
        }
    },[])

    function nextImage1(){
        document.getElementById("layer0").style.opacity = 1  
        document.getElementById("layer0").style.transitionDuration = '0.5s'
    }  

    function nextImage2(){
     
        document.getElementById("layer0").style.opacity = 0 
        document.getElementById("layer0").style.transitionDuration = '0.5s'
    }  
    
    return (        
        <div id="gallery1">
      {counter} .
        <div id="layer0"
        style={{background: "red", position: 'absolute', zIndex: '1',opacity: '0' }} >  <img src={img2} />   </div>
       <div id="layer1" style={{background: "yellow",position: 'absolute', zIndex: '0'}} > <img id="image1" src={img1} /></div>
           {project}
           {amount}

        </div>
    )
}