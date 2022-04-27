import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts"

const SalesByConsole = () => {
    const [salesByConsole,setSalesByConsole] = useState([]);
    // const [chartData, setChartData] = useState([]);

    useEffect(() => {
        getSalesByConsole();
    },[])

    const getSalesByConsole = async () => {
        try {
            let result = await axios.get(
                "https://localhost:7260/api/games/"
            );
            setSalesByConsole(result.data)
        } catch (e) {
            console.log(e.message);
        }
    }
    // useEffect(() => {
    //     let tempChartData = salesByConsole.map(entry => {
    //         return [entry.consoles, entry.sales];
    //     });
    //     setChartData(tempChartData);
    // }, [salesByConsole])

    function packageData(obj){
        let container = [];
        container.push(Array("Platform", "Sales", { role: "style" }))
        for(let[key,value] of Object.entries(obj)){
            container.push(Array(key,value,"blue"))
    }
    return container
}

let data = packageData(salesByConsole)


    
    return (  
        <div>
            <Chart
                chartType = 'ColumnChart'
                width = "100%"
                height = "400px"
                data = {data}
            />
        </div> 
    );
}
 
export default SalesByConsole;