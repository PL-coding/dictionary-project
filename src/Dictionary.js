import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search() {
      // documentation https://www.shecodes.io/learn/workshops/1096/apis/dictionary
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=0deecee21740t22ba3fb3658doabb96f`
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
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange}></input>
        </form>
        <Results results={results} />
    </div>}
    else {
        load();
        return "Loading..."
    }
    
}