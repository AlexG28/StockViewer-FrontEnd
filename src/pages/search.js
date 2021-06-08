// https://material-ui.com/components/tables/


import React, { useState, useEffect } from 'react'

//imports for the menu

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import mainStocks from '../pages/mainStocks';

const Search = () => {
    
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    
    useEffect(() => {
        async function update(){
            console.log("this is a change");

        }

        update();
    }, []);
    
    // need to add use effect or something like that 
    // need to rerender the chart every time the category changes
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
            
            {mainStocks(value)}
            <p>{value}</p>
            
        </div>
    )
}

export default Search
