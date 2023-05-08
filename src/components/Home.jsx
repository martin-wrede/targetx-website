import React, { useContext } from 'react'
import Gallery from './Gallery'
         
import  targetxData from '../data'
import { Context } from '../Context'
import Image01 from '../assets/Home-01.jpg'
import Image02 from '../assets/Home-02.jpg'
import Image03 from '../assets/Home-03.jpg'
import Image04 from '../assets/Home-04.jpg'
import Image05 from '../assets/Home-05.jpg'
 
export default function Home(){
   const { data } = useContext(Context)
    return (
        <div>
           
           
            ////
          {/*
          <img src={Image01} />
          */}
           
           <Gallery project="Home"
           img1={Image01} 
           img2={Image02} 
           img3={Image03}  
           img4={Image04} 
           img5={Image05}   
           amount={targetxData[0].gallery_images} />

            ////////////////////////////
            <h1>{ targetxData[0].gallery_image_title }  </h1> 
            <h2>  { targetxData[0].content_h1 } </h2> 
        </div>
       
    )
}