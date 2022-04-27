import { useState } from "react";
import axios from 'axios';
import DisplayGames from "./DisplayGames"

const SearchBar = (props) => {

    const[searchTerm, setSearchTerm] = useState([])
    const[games,setGames] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        getGames();
    };

    const getGames = async () => {
        try {
            let result = await axios.get(
                `https://localhost:7260/api/games/gameName/${searchTerm}`
            );
            setGames(result.data)
        } catch (e) {
            console.log(e.message);
        }
      }

      


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type = "text" placeholder="Search..." value = {searchTerm} onChange = {(event) => setSearchTerm(event.target.value)}></input> 
                <button type = "submit"> Submit </button>
            </form>
        </div>
     );
}
 
export default SearchBar;