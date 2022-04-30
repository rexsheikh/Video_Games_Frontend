import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts"

    // export const data = [
    //     ["Year", "Sales", "Expenses"],
    //     ["2004", 1000, 400],
    //     ["2005", 1170, 460],
    //     ["2006", 660, 1120],
    //     ["2007", 1030, 540],
    //   ];

const ShootersOverTime = () => {
    const [allShooters,setAllShooters] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        getAllShooters();
    },[])


    const getAllShooters = async () => {
        try {
            let result = await axios.get(
                "https://localhost:7260/api/games/shootersByYear"
            );
            setAllShooters(result.data)
            setIsLoading(false)
        } catch (e) {
            console.log(e.message);
        }
    }



    function packageData(obj){
        let container = [];
        container.push(Array("Years", "Shooters", { role: "style" }))
        for(let[key,value] of Object.entries(obj)){
            container.push(Array(key,value,"#483D8B"))
    }
    return container
}

let data = packageData(allShooters)
let options = {
    backgroundColor: '#B9B2E2',
    Title: "Genre Sales by Year"
    }
    if(isLoading == false){
        return (  
            <div>
                <h3>Genre: Shooters | Sales by Year</h3>
                <Chart
                    chartType = 'LineChart'
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
 
export default ShootersOverTime;
