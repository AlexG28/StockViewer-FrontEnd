// practicing axios fetch API
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';

//import SearchBar from "material-ui-search-bar";
import data1 from '../pages/SP500Companies.json';

//YOUTUBE TUTORIAL: https://www.youtube.com/watch?v=i1uhccATDcY
// also this: https://github.com/LetVDevelop/searchautocomplete/blob/AutoComplete/src/Search/AutoComplete.jsx

const MainStocks = () => {
    
    const [searchtext, setSearchtext] = useState("");
    const [suggest, setSuggest] = useState([]);
    const [resfound, setResfound] = useState(true);
    
    const handleChange = (e) => {
        let searchval = e.target.value;
        let suggestion = [];
        if (searchval.length > 0) {
            console.log(searchval);
            suggestion = data1
                .sort()
                .filter(
                        x => x.Symbol.toString() == searchval || x.Name == searchval
                        //(e) => e.toString().toLowerCase().includes(searchval.toLowerCase())
                    );
            console.log(suggestion);
            setResfound(suggestion.length !== 0 ? true : false);
        }
        setSuggest(suggestion);
        setSearchtext(searchval);
    };
   
    const suggestedText = (value) => {
        console.log(value);
        setSearchtext(value);
        setSuggest([]);
    };

    const getSuggestions = () => {
        if (suggest.length === 0 && searchtext !== "" && !resfound) {
          return <p>Search Content Not Found</p>;
        }
    
        return (
            <ul>
                {suggest.map((item, index) => {
                    return (
                    <div key={index}>
                        <li onClick={() => suggestedText(item)}>{item}</li>
                        {index !== suggest.length - 1 && <hr />}
                    </div>
                    );
                })}
            </ul>
        );
    };




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
            
        </div>
    )
}

export default MainStocks
