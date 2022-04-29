import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts"

const PublisherSales = () => {

    const [publisherSales,setPublisherSales] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        getPublisherSales();
    }, [])

    const getPublisherSales = async () => {
        try {
            let result = await axios.get(
                "https://localhost:7260/api/games/publishers"
            );
            setPublisherSales([
                result.data.publisher,
                result.data.publisher.console,
                result.data.publisher.globalSales
            ]
            )
            setIsLoading(false)
        } catch (e) {
            console.log(e.message);
        }
    }
console.log(publisherSales)

//    data: [
//     ...this.publisherSales.data
//     [
//         result.data.publisher,
//         result.data.console,
//         result.data.globalSales
//     ]
// ]

    // export const data = [
    //     ["Year", "Sales", "Expenses", "Profit"],
    //     ["2014", 1000, 400, 200],
    //     ["2015", 1170, 460, 250],
    //     ["2016", 660, 1120, 300],
    //     ["2017", 1030, 540, 350],
    //   ];
      
    //   export const options = {
    //     chart: {
    //       title: "Company Performance",
    //       subtitle: "Sales, Expenses, and Profit: 2014-2017",
    //     },
    //   };
      
    //   export function App() {
    //     return (
    //       <Chart
    //         chartType="Bar"
    //         width="100%"
    //         height="400px"
    //         data={data}
    //         options={options}
    //       />
    //     );
    //   }

    function packageData(obj) {
        let container = [];
        container.push(Array(("platform"), "publisher", "sales"))
        for(let[key,value] of Object.entries(obj)){
            container.push(Array((key), key, value))
        }
        return container
    }
console.log(packageData(publisherSales))

    // let data = packageData(publisherSales)

    let data = packageData(publisherSales)
        // {type: "string", id: "platform"},
        // {type: "string", id: "publisher"},
        // {type: "integer", id: "globalSales"},
        
    

 

    // let options = {
    //     chart: {
    //     title: "Console Sales by Publisher",
    //     subtitle: "Sales, Publishers, & Consoles",
    //     },
    //   };

    if(isLoading == false){
    return ( 
        <div>
            <Chart
            chartType='Timeline'
            width= "100%"
            height="400px"
            data= {data}
            // options = {options}
            />
        </div>
     );
}else{
    return (
        <h4> LOADING... </h4>
    )
}
} 
export default PublisherSales;

