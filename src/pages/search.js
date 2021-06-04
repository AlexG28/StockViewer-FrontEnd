// practicing axios fetch API
import React, { useState, useEffect } from 'react'
import axios from 'axios';

// import stuff for the material design import Table from '@material-ui/core/Table';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const Search = () => {
    const [count, setcount] = useState([]);
    const [state, setstate] = useState(null);
    
        
    useEffect(async () => {
        const response = await axios.get('http://localhost:3001/getQuoteRoute/Tech');
        const data = await response.data;
        const stocks = data[0].Stocks;
        console.log(stocks);
        setstate(stocks);
    }, []);    
        
    return (
        <div>
            <h1> You clicked me {count} times </h1>
            <button onClick={() => setcount(count+1)}>increase the count </button>
        
            {state && <div> {state[0].price} </div>}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ticker</TableCell>
                            <TableCell>Company Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Daily Change</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {state.map((element) => ( // current error is that this is null when executing
                            <TableRow key ={element.ticker}>
                                <TableCell component ="th" scope="row">
                                    {element.ticker}
                                </TableCell>
                                <TableCell alight="right">{element.name}</TableCell>
                                <TableCell alight="right">{element.price}</TableCell>
                                <TableCell alight="right">{element.dailyChange}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        </div>
    )
}

export default Search
