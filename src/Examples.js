import React from 'react';

export default function Examples(props) {
    if (props.examples.example) {
        return (
            <div>
                <em>eg. {props.examples.example}</em>
   </div> );} else {
        return null;
    }
}