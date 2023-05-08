import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home(){
  const [menuShown, setMenuShown ] = useState(false)
  const [hamburgerIcon, setHamburgerIcon ] = useState('block')
  
  var onresize = function(e) {
    //note i need to pass the event as an argument to the function
    let width = e.target.outerWidth;
    const hamburgerVar = document.getElementById('hamburger')
      width < 650 ? hamburgerVar.style.display = 'block'  : hamburgerVar.style.display = 'none'
      setHamburgerIcon(hamburgerVar.style.display)
  //   console.log(hamburgerIcon)

    }
 
   window.addEventListener("resize", onresize);

  function toggleMenu(){ 
            let toggleVar = document.getElementById("menu")           
      
        if (hamburgerIcon === 'block' && menuShown  === false ){
            toggleVar.style.opacity  = 1
            toggleVar.style.display = 'block'
            setMenuShown(true)  
            
        }
      else if(hamburgerIcon === 'block' && menuShown  === true ){
            toggleVar.style.opacity  = 0   
            toggleVar.style.display = 'none'
            setMenuShown(false)  
         
        }
        
  }

    return (
        <header  id="header">
        <div className="logo-container logo"
        
        >
        <Link to="/"   
      
        >
            <a href="index.html"><div style={{opacity:"0", width:"100%", height:"100%"}}>targetx.de</div></a>     
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
    <div id="menu"  >
    <div   >
      <ul  >
      <li>
        <Link to="/ux-ui-design" 
        onClick={toggleMenu}
        > UX/UI Design </Link>
      </li>
      <li  className = "dropdown-menu"  
       onClick={toggleMenu}
       ><Link to="/graphic-design" >Graphic Design</Link>
      <ul className="sub-menu">
        <li><Link to="/hist-museum-bremerhaven" >• Hist. Museum Bremerhaven</Link>
        </li>
        <li>
          <Link to="/kammerkonzerte"  
           onClick={toggleMenu} 
          >• Kammerkonzerte</Link>
        </li>
        <li>
          <Link to="/passus"
           onClick={toggleMenu}
          >• Passus</Link>
        </li>
      </ul>
      </li>
      <li>
        <Link to="/cooperations" 
         onClick={toggleMenu}
        >Cooperations</Link>
      </li>
      <li>
        <Link to="/contact" 
         onClick={toggleMenu}
        >Contact</Link>
      </li>
      </ul>


    </div>
    </div>
     
    </nav>
    </header>

    )
}




