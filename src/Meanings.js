import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    return (
        <div>
            <h4>{props.meanings.partOfSpeech}</h4>
            <p>{props.meanings.definition}
            <br/>
            <em>{props.meanings.example}</em></p>
            <Synonyms synonyms={props.meanings.synonyms} />
        </div>
    )
}