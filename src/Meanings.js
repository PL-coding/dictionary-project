import React from "react";

export default function Meanings(props) {
    return (
        <div>
            <h4>{props.meanings.partOfSpeech}</h4>
            <p>{props.meanings.definition}
            <br/>
            <em>{props.meanings.example}</em></p>
        </div>
    )
}