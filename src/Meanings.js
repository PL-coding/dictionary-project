import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meanings.css"

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <h4>{props.meanings.partOfSpeech}</h4>
            {props.meanings.definitions.map(function(definitions, index)
            {return (<div key={index}>
            <section>{definitions.definition}
            <br/>
            <Examples examples={definitions} />
            <Synonyms synonyms={definitions.synonyms} />
</section>
            </div>);

            })}
           
        </div>
    )
}