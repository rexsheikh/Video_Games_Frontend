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

    // function sumByYear(obj){
    //     let dict = {};
    //     for(let i = 0; i < obj.length; i++){
    //         if(!(dict[obj[i].year])){
    //             dict[obj[i].year] = obj[i].globalSales
    //         }else{
    //             dict[obj[i].year] += obj[i].globalSales
    //         }
    //     }
    //     return dict
    // }

    // function packageData(obj){
    //     let container = [];
    //     let keys = Object.keys(obj)
    //     console.log(keys)
    //     let values = Object.values(obj)
    //     for(let i = 0; i < obj.length; i++){
    //         container.push(Array(keys[i],values[i]))
    //         console.log(`container build: ${container}`)
    //     }
    //     return container
    // }

    function packageData(obj){
        let container = [];
        container.push(Array("Years", "Sales", { role: "style" }))
        for(let[key,value] of Object.entries(obj)){
            container.push(Array(key,value,"blue"))
    }
    return container
}

let data = packageData(allShooters)




    // if(isLoading){
    //     return <h4> Loading....</h4>
    // }else{
    //     let exampleDict = sumByYear(allShooters);
    //     console.log(`example dict: ${exampleDict}`)
    //     console.log(Object.keys(exampleDict))
    //     console.log(Object.values(exampleDict))
    //     let finalData = packageData(exampleDict)
    //     console.log(`${finalData}`)
    //     return ( 
    //     <div>
    //         <p>not loading </p>
    //         <Chart
    //         chartType="LineChart"
    //         width="100%"
    //         height="400px"
    //         data={finalData}
            
    //         />
    //     </div> )
    //     };

    if(isLoading == false){
        return (  
            <div>
                <h3>Genre: Shooters | Sales by Year</h3>
                <Chart
                    chartType = 'ColumnChart'
                    width = "100%"
                    height = "400px"
                    data = {data}
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
