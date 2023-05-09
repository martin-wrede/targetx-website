import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import '../App.css'

const Fader = props => {
    const [fadeProp, setFadeProp] = useState({
       fade: 'fade-in',
    })
    useEffect(()=> {

        const timeout = setInterval(()=> {
            if(fadeProp.fade === 'fade-in'){
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })

            }
           
        }
        , 4000)
        if (timeout>2000){
            console.log("2000")
        }
       // return () => clearInterval(timeout)
    },[fadeProp])


  return (
    <>
    <h1 className={fadeProp.fade}>{props.text}</h1>
    </>
  )
}

Fader.defaultProps = {
  text: 'Hello there'  
}

Fader.propTypes = {
    text : propTypes.string,
}


export default Fader