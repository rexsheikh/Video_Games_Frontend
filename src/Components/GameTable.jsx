import { Chart } from "react-google-charts"
const GameTable = (props) => {
    //on search data should be generated for charts 
    //
//     function packageData(obj){
//         let container = [];
//         container.push(Array("Platform", "Sales", { role: "style" }))
//         for(let[key,value] of Object.entries(obj)){
//             container.push(Array(key,value,"blue"))
//     }
//     return container
// }

    function findMatchesByName(obj){
        let data;
        for(let i = 0; i < obj.length; i++){
            data = obj.filter(item => item.name.indexOf(obj[i].name) !== -1);
            
        }
        return Object(data)
    }

    function generateChartData(matches){
        let container = [];
        container.push((Array("Platform", "Sales", { role: "style" })));
        for(let i = 0; i < matches.length; i++){
            container.push(Array(matches[i].platform,matches[i].globalSales,"blue"))
        }
        return container
    }

    let example = findMatchesByName(props.parentGames)
    console.log(`MATCHES: ${JSON.stringify(example)}`)

    let dataExample = generateChartData(example)
    console.log(`PACKAGED DATA: ${JSON.stringify(dataExample)}`)

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