import React, { useContext } from 'react'
import Gallery from './Gallery'
         
import { Context } from '../Context'

 
export default function Home(){
   const { data } = useContext(Context)

    let content  = null
   if (data[0] && data[0].gallery_image_names) {
    content = data[0].gallery_image_names.map((chapter, index) => (
        <div key={index}>
             {chapter.gallery_image_name}
        </div> 
    ))}

    return (
        <div>
          {/* <img src={Image01} />  */}
      
           <Gallery project="Home"
           img1={data[0] && data[0].gallery_image_names[0].gallery_image_name} 
           img2={data[0] && data[0].gallery_image_names[1].gallery_image_name}  
           img3={data[0] && data[0].gallery_image_names[2].gallery_image_name}  
           img4={data[0] && data[0].gallery_image_names[3].gallery_image_name} 
           img5={data[0] && data[0].gallery_image_names[4].gallery_image_name}    
           amount={data[0] && data[0].gallery_images} />
 
            <h1> {data[0]  && data[0].gallery_image_title }  </h1> 
            <h2>  {data[0]  &&data[0].content_h1 } </h2> 
            <span><i> {data[0]  && data[0].content_h1_text}</i></span>
        </div>
       
    )
}