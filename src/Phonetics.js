import React from "react";

export default function Phonetics(props) {
    if (props.phonetics) {
        console.log(props);
        return (
            <div>
                {props.phonetics}
            </div>
        );
    }
    else {
        return null;
    }
}