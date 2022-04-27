import SalesByConsole from "./Components/SalesByConsole";

import React, { useState,useEffect } from 'react';
import axios from 'axios';

const [games,setGames] = useState([]); 
const [allGames,setAllGames] = useState([]);

useEffect(() => {
        getAllGames();
    },[])


function newSearch(search){   {/*this takes in the search as a string*/}
    let newGames = games.filter(function(el){
    if(el.name.includes(search)){
        return true;
      }
    })
    setGames(newGames);
  }


  const getAllGames = async() => {
      try { 
              let result = await axios.get(
                  `https://localhost:7260/api/games/names/`
              )
          setAllGames(results.data)
      } catch (e) {
          console.log(e.message)
      }
  }

function App() {
  return (
    <div >
      <h3> hello world </h3>
      <SalesByConsole/>
    </div>
  );
}

export default App;
