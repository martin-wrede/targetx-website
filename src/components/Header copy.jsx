import React, { useState, useContext } from 'react'
import { Context } from '../Context';

import { Link } from 'react-router-dom'
import Logo from '../assets/targetx-logo-outl.svg'
 
export default function Home(){
  const [menuShown, setMenuShown ] = useState(false)
  const [hamburgerIcon, setHamburgerIcon ] = useState('block')
  const [browserWidth,setBrowserWidth] = useState(window.outerWidth)
  
  const { language, changeLanguage } = useContext(Context);

let onresize = function(e) {
    //note i need to pass the event as an argument to the function
    let width = e.target.outerWidth;
    setBrowserWidth(width)
    
   // document.getElementById('hamburger').style.display = 'block'
   
    const hamburgerVar = document.getElementById('hamburger')

    browserWidth < 650 ? hamburgerVar.style.display = 'block'  : hamburgerVar.style.display = 'none'
      setHamburgerIcon(hamburgerVar.style.display)
  //   console.log(hamburgerIcon)
  browserWidth > 650 ?  document.getElementById("menu").style.display = 'block' : document.getElementById("menu").style.display = 'none'

    }
 
   window.addEventListener("resize", onresize);

  function toggleMenu(){ 
            let toggleMenu = document.getElementById("menu")           
      console.log(browserWidth)
        if (browserWidth<650  &&   hamburgerIcon === 'block' && menuShown  === false ){
            toggleMenu.style.opacity  = 1
            toggleMenu.style.display = 'block'
            setMenuShown(true)  
            
        }
      else if(browserWidth<650  && hamburgerIcon === 'block' && menuShown  === true ){
        toggleMenu.style.opacity  = 0   
        toggleMenu.style.display = 'none'
            setMenuShown(false)  
         
        }
        
  }

    return (
        <header  id="header">
        <div className="logo-container logo" >
       
        <Link to="/"  >
          <img id="logo" src={Logo} />
            <div style={{opacity:"0", width:"100%", height:"100%"}}>targetx.de</div>
          </Link>
        </div>
        <div id="button1" onClick={toggleMenu} className="menu-icon">
           
      <span className="menu-format"><div id="hamburger">
			<div className="hamburger-streifen"></div>
			<div className="hamburger-streifen"></div>
			<div className="hamburger-streifen"></div>
			</div> </span>
        </div>
    <nav>
    <div id="menu-sprachen"  >
    <button className="button" onClick={() => changeLanguage("de")} disabled={language === "de"}>
        DE
      </button>
      <button className="button"  onClick={() => changeLanguage("en")} disabled={language === "en"}>
        EN
      </button>
    </div>
    
    </nav>
    </header>

    )
}




