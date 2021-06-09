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


const MainStocks = (currentCategory) => {
    const categories = ["Bank", "Healthcare", "Semicondctor", "Automotive", "Tech"];
    
    const [data, setData] = useState(null);
    
    if (currentCategory == null){
        currentCategory = 0;
    }
    
    useEffect(() => {
        async function fetchData(){
            
            const response = await axios.get('http://localhost:3001/getQuoteRoute/' + categories[currentCategory]);
            const data = await response.data;
            const stocks = data[0].Stocks;
            console.log(currentCategory);
            console.log(stocks);
            setData(stocks);
        }
        fetchData();
    }, []);    
    
        
    return (
        <div>
            
            {data && <div> {data[0].price}
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

export default MainStocks
