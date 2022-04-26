import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts"

const SalesByConsole = () => {

    const [consoles,setConsoles] = useState([]);
    let salesByConsole = [];
    let consoleCount = consoles.length


    useEffect(() => {
        getConsoles();
        getSalesByConsole();
    },[])

    const getConsoles = async () => {
        try {
            let result = await axios.get(
                "https://localhost:7260/api/games/"
            );
            setConsoles(result.data)
            console.log(`CONSOLES : ${consoles}`)
        } catch (e) {
            console.log(e.message);
        }
    }

    const getSalesByConsole = async() => {
        try { 
            for(let i = 0; i < consoleCount; i++){
                let result = await axios.get(
                    `https://localhost:7260/api/games/${consoles[i]}`
                )
            salesByConsole.push(result.data)
            }
        } catch (e) {
            console.log(e.message)
        }
        console.log(salesByConsole)
    }
        //[platform,sales]
        function packageData(plat,sales){
            let res = []
            for(let i = 0; i < consoleCount;i++){
                res.push([plat[i],sales[i]]);
            }
            return res
        }

        let sales = packageData(consoles,salesByConsole);
        console.log(`SALES: ${sales}`)
    // export const data = [
    //     ["Element", "Density", { role: "style" }],
    //     ["Copper", 8.94, "#b87333"], // RGB value
    //     ["Silver", 10.49, "silver"], // English color name
    //     ["Gold", 19.3, "gold"],
    //     ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
    //   ];
      
    //   export function App() {
    //     return (
    //       <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
    //     );
    //   }

        const data = [
            ["Platform","TotalSales",{ role: "style" }],
            [sales,"silver"]
        ]
      
    return (  
        <div>
            <Chart
                chartType = 'ColumnChart'
                width = "100%"
                height = "400px"
                data = {data}
                data = {[["Consoles", "Sales By Console"], ...consoles, salesByConsole]}
                options = {{legend: {position: 'bottom'}}}
                legendToggle
            />
        </div> 
    );
}
 
export default SalesByConsole;