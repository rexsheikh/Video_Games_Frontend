import { useState } from "react";
import SearchBar from "./SearchBar";

const GameTable = (props) => {

    return ( 
    <div>
        <thead>
            <tr> 
                <th className="text-center font-weight-bold"> Name</th>
                <th className="text-center font-weight-bold"> Platform</th>
                <th className="text-center font-weight-bold"> Year </th>
            </tr>
        </thead>
        <tbody>
        {props.parentGames.map((game) =>{
            return (
                <tr> 
                    <td className="text-center"> {game.Name} </td>
                    <td className="text-center"> {game.Platform} </td>
                    <td className="text-center"> {game.Year} </td>
                    {/* look up column data and map appropriately. */}
                </tr>
            )
        })}
        </tbody>
    </div>
    );
}
 
export default GameTable;