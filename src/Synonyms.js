import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div>
            <h5>Synonyms:</h5>
            {props.synonyms.map(function(synonyms, index) {
                return (
                <ul key={index}>
                <li>{synonyms}</li></ul>
           ); })}
   </div> )} else {
        return null;
    }
}