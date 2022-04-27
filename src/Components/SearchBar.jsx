import { useState } from "react";

const SearchBar = (props) => {

    const [searchTerm,setSearchTerm] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        props.newSearch(searchTerm)
    };
 


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