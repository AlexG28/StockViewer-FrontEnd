// practicing axios fetch API
import React, { useState, useEffect } from 'react'
import Axios from 'axios'



const Search = () => {
    const [count, setcount] = useState(0);
    const [state, setstate] = useState(null);
    /*
    const getFromApi = () =>{
        Axios.get('http://localhost:3001/getQuoteRoute/Tech')
            .then((response) => {
                console.log(response);
                const data = [];
                
                setstate(response.data.title);
            })
    } 
    */
        
    useEffect(async () => {
        /*
        Axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) =>{
                console.log(response);
                setstate(response);
            })
        */

        const response = await fetch('http://localhost:3001/getQuoteRoute/Tech');
        const data = await response.json();
        const stocks = data[0].Stocks;
        console.log(stocks[0]);
        setstate(stocks[0]);
    }, []);    
        
    return (
        <div>
            <h1> You clicked me {count} times </h1>
            <button onClick={() => setcount(count+1)}>increase the count </button>
        
            {state && <div> {state.price} </div>}
        
        </div>
    )
}

export default Search
