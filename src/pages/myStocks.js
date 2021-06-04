// https://material-ui.com/components/tables/


import React, { useState, useEffect } from 'react'
import axios from 'axios'

//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(ticker, name, price, dailyChange) {
    return { ticker, name, price, dailyChange };
}
  
const data = [
    createData('aapl', 'Apple Inc', 120, 0.44),
    createData('goog', 'Alphabet', 1670, 23.22),
    createData('amzn', 'Amazon', 3380, 57.10),
    createData('msft', 'Microsoft', 120, 6.23),
    createData('tsla', 'Tesla', 680, -23.30),
];


const stockChart = () => {
    return (
        <div>
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
                        {data.map((element) => (
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

export default stockChart
