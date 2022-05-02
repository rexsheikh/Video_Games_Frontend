import SalesByConsole from "./Components/SalesByConsole";
import SearchBar from "./Components/SearchBar";
import ShootersOverTime from "./Components/ShootersOverTime";
import PublisherSales from "./Components/PublisherSales";
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css'



function App() {
  return (
    <div className="font">
    <div className="allBackground">
      <div >
      <SearchBar/>
      </div>
      <div className="border">
      <SalesByConsole/>
      </div>
      <div className="border"> 
      <ShootersOverTime />
      </div>
      <div className="border">
      {/* <PublisherSales/> */}
      </div>
    </div>
    </div>
  );
}

export default App;
