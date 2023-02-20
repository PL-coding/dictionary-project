import React from "react";
import ReactAudioPlayer from "react-audio-player";


export default function Phonetics(props) {
    
    console.log(props);
    return (
        <div className="Phonetics">
                   {props.phonetics.text}
            <ReactAudioPlayer
  src={props.phonetics.audio}
  controls
/>
        </div>
    );
}