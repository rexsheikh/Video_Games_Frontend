import SalesByConsole from "./Components/SalesByConsole";
import SearchBar from "./Components/SearchBar";
import ShootersOverTime from "./Components/ShootersOverTime";
import PublisherSales from "./Components/PublisherSales";
import React, { useState,useEffect } from 'react';
import axios from 'axios';



function App() {
  return (
    <div >
      <SearchBar/>
      <SalesByConsole/>
      <ShootersOverTime />
      <PublisherSales/>
    </div>
  );
}

export default App;
