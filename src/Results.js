import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
    if (props.results) {
        return (
            <div>
                <h2>{props.results.word}</h2>
                <Phonetics phonetics={props.results.phonetic} />
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