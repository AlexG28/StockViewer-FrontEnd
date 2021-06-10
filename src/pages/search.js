import React, { useState, useEffect } from 'react'

//imports for the menu

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// other imports 
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import mainStocks from '../pages/mainStocks';

// add CSS but it works rather well

const Search = () => {
    const categories = ["Bank", "Healthcare", "Semicondctor", "Automotive", "Tech"];
    const [data, setData] = useState(null);




    const [value, setValue] = useState(0);
    //const [chart, setChart] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
    useEffect(() => {
        async function fetchData(){
            
            const response = await axios.get('http://localhost:3001/getQuoteRoute/' + categories[value]);
            const data = await response.data;
            const stocks = data[0].Stocks;
            console.log(value);
            console.log(stocks);
            setData(stocks);
        }
        fetchData();
        
        
    }, [value]);
    
    
    
    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label = "Bank"/>
                    <Tab label = "Healthcare"/>
                    <Tab label = "Semiconductor"/>
                    <Tab label = "Automotive"/>
                    <Tab label = "Tech"/>
                </Tabs>
            </AppBar>

            {data && <div>
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
                            {data.map((element) => ( // current error is that this is null when executing
                                <TableRow key ={element.ticker}>
                                    <TableCell component ="th" scope="row">
                                        {element.ticker}
                                    </TableCell>
                                    <TableCell alight="right">{element.companyName}</TableCell>
                                    <TableCell alight="right">{element.price}</TableCell>
                                    <TableCell alight="right">{element.dailyChange}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>}
            
        </div>
    )
}

export default Search
