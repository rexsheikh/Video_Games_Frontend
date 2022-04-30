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
    const[allRPGs, setAllRPGs] = useState([]);
    const [isLoading,setIsLoading] = useState(0);

    useEffect(() => {
        getAllShooters();
        getAllRPGs();
    },[])


    const getAllShooters = async () => {
        try {
            let result = await axios.get(
                "https://localhost:7260/api/games/shootersByYear"
            );
            setAllShooters(result.data)
        } catch (e) {
            console.log(e.message);
        }
    }
    const getAllRPGs = async () => {
        try {
            let result = await axios.get(
                "https://localhost:7260/api/games/rpgsByYear"
            );
            setAllRPGs(result.data)
        } catch (e) {
            console.log(e.message);
        }
    }




    function packageData(obj){
        let container = [];
        container.push(Array("Years", "Shooters","RPGs"))
        for(let[key,value] of Object.entries(obj)){
            container.push(Array(key,value))
    }
    return container
}

function insertData(packagedData,newData){
    newData = Object.values(newData);
    for(let i = 1; i < packagedData.length; i++){
        packagedData[i].push(newData[i])
    }
    return packagedData
}


let data = packageData(allShooters)
let finalData = insertData(data,allRPGs)

// let finalData = insertData(packagedData,allRPGs)
// console.log(`final data: ${finalData}`)
// console.log(`rpg values: ${Object.values(allRPGs)}`)
let options = {
    backgroundColor: '#B9B2E2',
    title: "Genre Sales by Year",
    curveType: "function",
   
    }
    if(isLoading == false){
        return (  
            <div>
                <h3>Genre: Shooters | Sales by Year</h3>
                <Chart
                    chartType = 'LineChart'
                    width = "100%"
                    height = "400px"
                    data = {finalData}
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
