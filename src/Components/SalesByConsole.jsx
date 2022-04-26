import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts"

const SalesByConsole = () => {

    const [consoles,setConsoles] = useState([]);
    const [salesByConsole,setSalesByConsole] = useState([]);


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
        } catch (e) {
            console.log(e.message);
        }
    }

    const getSalesByConsole = async() => {
        let container = [];
        try { 
            for(let i = 0; i < consoles.length; i++){
                let result = await axios.get(
                    `https://localhost:7260/api/games/${consoles[i]}`
                )
            container.push(result.data)
            }
            setSalesByConsole(container)
        } catch (e) {
            console.log(e.message)
        }
    }
    
    
    
    let data = [["Platform",...consoles],["Sales",...salesByConsole]]
    console.log(`data: ${data}`)
      
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