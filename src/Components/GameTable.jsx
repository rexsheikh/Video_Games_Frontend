import { useState } from "react";
import { Chart } from "react-google-charts"
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css'

const GameTable = (props) => {

    function matchesToData(obj){
        let dict = {};
        let matches;
        for(let i = 0; i < obj.length; i++){
            matches = obj.filter(item => item.name.indexOf(obj[i].name) !== -1);
            dict[obj[i].name] = generateChartData(matches)
        }
        return dict
    }

    function generateChartData(matches){
        let container = [];
        container.push((Array("Platform", "Sales", { role: "style" })));
        for(let i = 0; i < matches.length; i++){
            container.push(Array(matches[i].platform,matches[i].globalSales,"blue"))
        }
        return container
    }




    if(props.parentGames.length === 0){
        return(
            <div> 
                <p>Enter a search term....</p>
            </div>
        )
    }else{
        let dict = matchesToData(props.parentGames)
        return ( 
        <div>
            <table className="table table-dark">
                <thead>
                    <tr> 
                        <th className="text-center font-weight-bold"> Name</th>
                        <th className="text-center font-weight-bold"> Platform</th>
                        <th className="text-center font-weight-bold"> Sales per Console </th>
                    </tr>
                </thead>
                <tbody>
                {props.parentGames.map((game,index) =>{
                    return (
                        <tr key = {index}> 
                            <td className="text-center"> {game.name} </td>
                            <td className="text-center"> {game.platform} </td>
                            <th className="zoom"><Chart
                                chartType = 'ColumnChart'
                                width = "100%"
                                height = "100%"
                                data = {dict[game.name]} 
                    />
                      </th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        );
            }
}
 
export default GameTable;