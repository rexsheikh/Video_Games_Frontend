import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts"
import App from "../App.css";

const SalesByConsole = () => {
    const [salesByConsole,setSalesByConsole] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
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
            setIsLoading(false)
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
            container.push(Array(key,value,"#483D8B"))
    }
    return container
}

let data = packageData(salesByConsole)
let options = {
    backgroundColor: '#B9B2E2'
}


    if(isLoading == false){
        return (  
            <div>
                <h3>Video Games Sold Per Console</h3>
                <Chart
                    
                    chartType = 'ColumnChart'
                    width = "100%"
                    height = "400px"
                    data = {data}
                    options = {options}
                />
            </div> 
        );
    }else{
        return (
            <h4> LOADING...</h4>
        )
            
        
    }
}
    
export default SalesByConsole;