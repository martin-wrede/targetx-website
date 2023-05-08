import React, { useContext } from 'react';
import Gallery from './Gallery';
import Footer from './Footer';
import targetxData from '../data';
// import { Context } from '../Context';
import Image01 from '../assets/Phone-11-flatlay-mockup.jpg';

export default function UxuiDesign() {
  const content_ux = targetxData[1].content_chapter.map((el, index) => (
    <div key={index}>
      <h1>{el.content_h1}</h1>
      <h2>{el.content_h2}</h2>
      <span>{el.content_h1_text}</span>
      <img className="content-image" 
    src={import.meta.env.BASE_URL + `${el.content_h2_image}`} 
   //  src={`../assets/${el.content_h2_image}`} 
     
      />
      <button onClick={() => window.open(el.button_url)}>{el.button}</button>
    </div>
  ));

  return (
    <div>
      <div className="content_container" id="main">
        <div className="content_main" id="content">
          {content_ux}
        </div>
      </div>
      <div id="sidebar" className="content_sub">
        <span className="text-markierung">Papierskizzen.</span>
        <br />
      </div>
      <Footer />
    </div>
  );
}
