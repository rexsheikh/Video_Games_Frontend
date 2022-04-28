import SalesByConsole from "./Components/SalesByConsole";
import SearchBar from "./Components/SearchBar";
import ShootersOverTime from "./Components/ShootersOverTime";
import React, { useState,useEffect } from 'react';
import axios from 'axios';



function App() {
  return (
    <div >
      <SearchBar/>
      <SalesByConsole/>
      <ShootersOverTime />
      
    </div>
  );
}

export default App;
