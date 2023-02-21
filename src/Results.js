import React from "react";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
            <div className="row PrimarySection">

                <h1 className="SearchWord col my-auto">{props.results.word}</h1>
                <div className="col d-inline-flex flex-column">
                {props.results.phonetics.filter((phonetic) => phonetic.text).map(function(phonetics, index){
                    return(
                        <div key={index}>
                            <Phonetics phonetics={phonetics}/>
                            </div>
                    );
                })}</div></div>
                
                {props.results.meanings.map(function(meanings, index) {
                    return (
                        <div key={index}>
                           <Meanings meanings={meanings}/>
                        </div>
                    );
                }
                    )}
                </div>
        )
    } else {
        return null;
    }
}