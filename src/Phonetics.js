import React from "react";
import AudioPlayer from 'react-modern-audio-player';
import "./Phonetics.css";


export default function Phonetics(props) {
    let playList = [
        {
          name: 'Audio',
          writer: ' ',
          img: ' ',
          src: props.phonetics.audio,
          id: 1,
        },
      ]

if (props.phonetics.audio.length > 0 )
    return (
        <div className="Phonetics row">
 <div className="col AudioPlayer my-auto">       
         <AudioPlayer
         playList={playList}
        audioInitialState={{
          muted: false,
          volume: 0.2,
          curPlayId: 1,
        }}
      /></div>
      <div className="PhoneticsText col my-auto">{props.phonetics.text}</div> 
            </div>
    );
    else 
    return (  <div className="Phonetics row">
    <div className="col PhoneticsNoAudio">{props.phonetics.text}</div>
                    </div>

    );
}