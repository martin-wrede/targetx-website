import React, { useContext } from 'react';
import Gallery from './Gallery';
import Footer from './Footer';
// import targetxData from '../data';
import { Context } from '../Context';
import Image01 from '../assets/Phone-11-flatlay-mockup.jpg';

export default function UxuiDesign() {
  const { data } = useContext(Context);

  let content_ux = null;

  if (data[1] && data[1].content_chapter) {
    content_ux = data[1].content_chapter.map((chapter, index) => (
      <div key={index}>
        <h1>{chapter.content_h1}</h1>
        <h2>{chapter.content_h2}</h2>
        <span>{chapter.content_h1_text}</span>
        <img
          className="content-image"
          src={import.meta.env.BASE_URL + `${chapter.content_h2_image}`}
        />
        <button onClick={() => window.open(chapter.button_url)}>{chapter.button}</button>
      </div>
    ));
  }

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
