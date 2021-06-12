// practicing axios fetch API
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';


//import SearchBar from "material-ui-search-bar";
import sp500Data from '../pages/SP500Companies.json';

// import chart framework
import { Line } from 'react-chartjs-2';


//YOUTUBE TUTORIAL: https://www.youtube.com/watch?v=i1uhccATDcY
// also this: https://github.com/LetVDevelop/searchautocomplete/blob/AutoComplete/src/Search/AutoComplete.jsx

const MainStocks = () => {
    /*
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'price',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };
    */
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                    beginAtZero: true,
                    },
                },
            ],
        },
    };

    const [searchtext, setSearchtext] = useState("");
    const [suggest, setSuggest] = useState([]);
    const [resfound, setResfound] = useState(true);

    const [chosen , setChosen] = useState("");
    const [chosenData, setChosenData] = useState([]);
    
    useEffect(() => {
        console.log('wtf');
        async function fetchData(){
            console.log(chosen);
            var url = 'https://cloud.iexapis.com/stable/stock/' + chosen + '/chart/1m?token=pk_6591e91f712e4ab7b7e1eac1af451489&chartLast=25&chartCloseOnly=true';
            const response = await axios.get(url);
            const main = await response.data;
            
            // THIS WHOLE AREA IS COMPLETELY BROKEN  
            var labels1 = [];
            var dataSet1 = [];
            for (var i = main.length -1; i >= 0; i--){
                labels1.push(main[i].date);
                dataSet1.push(main[i].close);
            }
            
            const priceHistory = {
                labels: labels1,
                datasets: [
                    {
                        label: 'price',
                        data: dataSet1,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                    },
                ],
            };
            console.log(priceHistory);
            
            
            
            setChosenData(priceHistory);
            //console.log(chosenData);
        }

        fetchData();
    }, [chosen]);
    

    function filterValid(item, searchval){
        
        if (item.Name.toLowerCase().includes(searchval.toString())) {
            return true;
        }

        if (item.Symbol.toLowerCase().includes(searchval.toString())){
            return true;
        }

        return false;
    }

    const handleChange = (e) => {
        let searchval = e.target.value;
        let suggestion = [];
        if (searchval.length > 0) {
            //console.log(searchval);
            suggestion = sp500Data
                .sort()
                .filter(x => filterValid(x, searchval));
            //console.log(suggestion);
            setResfound(suggestion.length !== 0 ? true : false);
        }
        setSuggest(suggestion);
        setSearchtext(searchval);
    };
   
    const suggestedText = (value) => {
        setSearchtext(value);
        setSuggest([]);
        setChosen(value);
    };

    const getSuggestions = () => {
        if (suggest.length === 0 && searchtext !== "" && !resfound) {
          return <p>Search Content Not Found</p>;
        }
    
        return (
            <ul>
                {suggest.slice(0,10).map((item, index) => {
                    return (
                        <li onClick={() => suggestedText(item.Symbol.toString())}>{item.Name.toString()}</li>

                    )
                })}
                
            </ul>
        );
    };


    const createChart = () => {
        if (chosen == ""){
            return <p>No Chart</p>;
        } else {
            console.log("draw chart here");
            // create a chart here 
            //var url = process.env.REACT_APP_API_URL1 + 'tsla' + process.env.REACT_APP_API_URL2; 
        
            return (<Line data={chosenData} options={options} />);
        }
    }


    return (
        <div>
            <input
                type="text"
                placeholder="Search.."
                className="search"
                value={searchtext}
                onChange={handleChange}
            />
            {getSuggestions()}
            {createChart()}
        </div>
    )
}

export default MainStocks
