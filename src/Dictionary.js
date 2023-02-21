import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
      // documentation https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }

  
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load(){
        setLoaded(true);
        search();
    }
    

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
           }

if(loaded) {
    return <div className="Dictionary">
        <div className="Header">
               <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} placeholder="Search for a new word" className="SearchField"></input>
        </form>
    </div>
        <Results results={results} />
    
    </div>}
    else {
        load();
        return "Loading..."
    }
    
}