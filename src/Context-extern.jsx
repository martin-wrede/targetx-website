import React, { useEffect, useState } from 'react';


const Context = React.createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  
  const url  = "https://martin-wrede.github.io/reactwebsite-ghpages/media/data.json"
  const url2 = "https://jsonplaceholder.typicode.com/users/3";

  const getData = () => {
    fetch(`${new URL(url, import.meta.url)}`)
   
      
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
       
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
