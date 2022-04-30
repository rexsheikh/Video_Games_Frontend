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
        container.push((Array("Platform", "Sales (millions of copies)", { role: "style" })));
        for(let i = 0; i < matches.length; i++){
            container.push(Array(matches[i].platform,matches[i].globalSales,"483D8B"))
        }
        return container
    }

    if(props.parentGames.length === 0){
        return(
            <div> 
            </div>
        )
    }else{
        let dict = matchesToData(props.parentGames)
        return ( 
        <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr className="text-align:center"> 
                        <th className="text-center font-weight-bold"> Sales Data </th>
                    </tr>
                </thead>
                <tbody>
                {props.parentGames.map((game,index) =>{
                    return (
                        <tr key = {index}> 
                            <td><Chart
                                chartType = 'ColumnChart'
                                width = "100%"
                                height = "100%"
                                data = {dict[game.name]} 
                                let options = {{
                                    backgroundColor: '#B9B2E2',
                                    title: `${game.name}/${game.year}/${game.genre}`,
                                    subtitle: game.year,
                                    legend: {position: "bottom"}
                                }}
                                 />
                             </td>
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