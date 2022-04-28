import { Chart } from "react-google-charts"
const GameTable = (props) => {

    // {
            //title : [[pc sales],[xbox sales],[playstation]]
    // }

    //on search => pass in that name, send it to the backend as a parameter. 
    //backend then searches for matches according to title and returns sales by console.


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


    let dictExample = matchesToData(props.parentGames)
    console.log(`final dict: ${JSON.stringify(dictExample)}`)

    return ( 
    <div>
        <table>
            <thead>
                <tr> 
                    <th className="text-center font-weight-bold"> Name</th>
                    <th className="text-center font-weight-bold"> Platform</th>
                    <th className="text-center font-weight-bold"> Year </th>
                    <th className="text-center font-weight-bold"> Data </th>
                </tr>
            </thead>
            <tbody>
            {props.parentGames.map((game,index) =>{
                return (
                    <tr key = {index}> 
                        <td className="text-center"> {game.name} </td>
                        <td className="text-center"> {game.platform} </td>
                        <td className="text-center"> {game.year} </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    );
}
 
export default GameTable;