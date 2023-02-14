import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    // documentation https://www.shecodes.io/learn/workshops/1096/apis/dictionary
    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=0deecee21740t22ba3fb3658doabb96f`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
           }

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange}></input>
        </form>
        <Results results={results} />
    </div>
}