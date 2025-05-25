import React, { useContext } from 'react';
import Gallery from './Gallery';
import Footer from './Footer';
import { Context } from '../Context';


export default function Kooperationen(){
  const {data} = useContext(Context)
     


  let content = null
  if (data[6] && data[6].content_chapter) {
    content = data[6].content_chapter.map((chapter, index) => (
      <div key={index}>
        <h1>{chapter.content_h1}</h1> 
       {/*
        <h2>{chapter.content_h2}</h2>
         */}
        <span>{chapter.content_h1_text}</span>
      <br /> 
      </div>
    ))
    }

    return (
        <div>
          <br/>
              <div className="content_container" id="main">
      <div className="content_main" id="content">
         {content}
        <p>
          <span className="text-markierung">fsg3</span>
          <br />
          Communication and Design, München
          <br />
          Link:{" "}
          <a
            href="http://www.fsg3.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.fsg3.de
          </a>
        </p>
        <p>
           
        </p>
        <br />
       
        <p>
         
         
          
        </p>
        <p>
          <span className="text-markierung">top e.V.</span>
          <br />
          top, Verein zur Förderung kultureller Praxis, Berlin
          <br />
          Association for the promotion of cultural practice, Berlin



 
          <br />
          Link:{" "}
          <a href="http://www.top-ev.de/"target="_blank"
            rel="noopener noreferrer"
          >
            www.top-ev.de
          </a>
        </p>
      </div>
     
     <div id="sidebar" className="content_sub">
      <span className="text-markierung"> {data[6] && data[6].sidebar_h2}</span>
      <br />
       <br />
      {data[6] &&  <img src={`${data[6].sidebar_image}`} />
        }
      
       
            
          </div>
             </div>
          </div>
        )
      }
      