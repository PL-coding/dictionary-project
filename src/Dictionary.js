import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePhotosResponse(response) {
        setPhotos(response.data.photos);
        }

    function search() {
      // documentation https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleDictionaryResponse);

        // documentation https://www.shecodes.io/learn/apis/images
        let photosApiKey = `0deecee21740t22ba3fb3658doabb96f`
        let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`
        axios.get(photosApiUrl).then(handlePhotosResponse);
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
        <Photos photos={photos} />
    
    </div>}
    else {
        load();
        return "Loading..."
    }
    
}