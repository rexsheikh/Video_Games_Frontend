import { Chart } from "react-google-charts"
const GameTable = (props) => {
    // let example = props.parentGames[0].name;
    // console.log(`EXAMPLE: ${example}`)
    // // export const data = [
    // //     ["Element", "Density", { role: "style" }],
    // //     ["Copper", 8.94, "#b87333"], // RGB value
    // //     ["Silver", 10.49, "silver"], // English color name
    // //     ["Gold", 19.3, "gold"],
    // //     ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
    // //   ];

    function packageData(obj){
        let container = [];
        container.push(Array("Platform", "Sales", { role: "style" }))
        for(let i = 0; i < obj.length; i++){
            container.push(Array(props.parentGames[i].platform,props.parentGames[i].globalSales,"blue"))
        }
        return container
    }
    
    let data = packageData(props.parentGames)
    console.log(`CONTAINER DATA: ${data}`)

    return ( 
    <div>
        <table>
            <thead>
                <tr> 
                    <th className="text-center font-weight-bold"> Name</th>
                    <th className="text-center font-weight-bold"> Platform</th>
                    <th className="text-center font-weight-bold"> Year </th>
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
        <div>
            <Chart
                chartType = 'ColumnChart'
                width = "75%"
                height = "100px"
                data = {data}
            />
        </div> 
    </div>
    );
}
 
export default GameTable;