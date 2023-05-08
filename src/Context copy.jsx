import React, {useEffect, useState } from 'react'

const Context   =  React.createContext()

function ContextProvider({children}){
    const [data,setData] = useState([]);

    const getData = ()=>{
    fetch(`${process.env.PUBLIC_URL}/data.json`
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])


     
    return(
        <Context.Provider value={{data}}>

            {children}
        </Context.Provider> 
    )


}

export { Context, ContextProvider }