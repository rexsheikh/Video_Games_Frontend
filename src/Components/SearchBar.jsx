import { useState } from "react";
import axios from 'axios';
import GameTable from "./GameTable"
import "./SearchBar.css"
import App from "../App.css";


const SearchBar = (props) => {

    const[searchTerm, setSearchTerm] = useState([])
    const[games,setGames] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        getGames();
    };
    
    function packageData(obj){
        let container = [];
        container.push(Array("Platform", "Sales", { role: "style" }))
        for(let[key,value] of Object.entries(obj)){
            container.push(Array(key,value,"blue"))
    }
    return container
}

    const getGames = async () => {
        try {
            let result = await axios.get(
                `https://localhost:7260/api/games/${searchTerm}`
            );
            setGames(result.data)
        } catch (e) {
            console.log(e.message);
        }
      }
    
    return ( 
        <div >
            <div className="topBackground">
            <form onSubmit={handleSubmit}>
                <input className="search" type = "text" placeholder="Search..." value = {searchTerm} onChange = {(event) => setSearchTerm(event.target.value)}></input> 
                <button className="myButton" type = "submit"> Submit </button>
            </form>
            </div>
            <GameTable parentGames = {games}/>
        </div>
     );
}
 
export default SearchBar;