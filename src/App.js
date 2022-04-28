import SalesByConsole from "./Components/SalesByConsole";
import SearchBar from "./Components/SearchBar";
import React, { useState,useEffect } from 'react';
import axios from 'axios';



function App() {
  return (
    <div >
      <SearchBar/>
      <SalesByConsole/>
      
    </div>
  );
}

export default App;
