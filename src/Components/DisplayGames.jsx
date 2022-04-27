import { useState } from "react";

const GameTable = (props) => {

    return ( 
    <div>
        <thead>
            <tr> 
                <th className="text-center font-weight-bold"> </th>
                <th className="text-center font-weight-bold"> </th>
                <th className="text-center font-weight-bold"> </th>
                <th className="text-center font-weight-bold"> </th>
                <th className="text-center font-weight-bold"> </th>
            </tr>
        </thead>
        <tbody>
        {props.parentGames.map((game) =>{
            return (
                <tr> 
                    <td className="text-center"> {game.name} </td>
                    {/* look up column data and map appropriately. */}
                </tr>
            )
        })}
        </tbody>
    </div>
    );
}
 
export default GameTable;