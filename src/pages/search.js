import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Search = () => {
    
    const url = 'http://localhost:3000/getQuoteRoute/Tech';
    const [product, setProduct] = useState(null);

  

    useEffect(() => {
        axios.get(url)
            .then(response =>{
                setProduct(response.data);
            })
    }, [url])
    
    console.log(product[0]);
    
    
    if (product){

        return (
            <div style=
            {{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '90vh'
            }}
        >
        <h1>{product[0].Stocks[0]} </h1>
            
        </div>
        )
    }

    return (
        <div>

        </div>
    )
    
}

export default Search
