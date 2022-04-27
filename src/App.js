import SalesByConsole from "./Components/SalesByConsole";
import SearchBar from "./Components/SearchBar";
import DisplayGames from "./Components/DisplayGames"
import React, { useState,useEffect } from 'react';
import axios from 'axios';

const [games,setGames] = useState([]); 

const getGames = async () => {
  try {
      let result = await axios.get(
          `https://localhost:7260/api/gameName/${searchTerm}`
      );
      setGames(result.data)
  } catch (e) {
      console.log(e.message);
  }
}


function App() {
  return (
    <div >
      <SearchBar getGames = {getGames}/>
      <SalesByConsole/>
      <DisplayGames parentGames = {games}/>
    </div>
  );
}

export default App;
