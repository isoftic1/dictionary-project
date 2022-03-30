import React from "react";


export default function Phonetic(props) {

    if (props.phonetic.audio) {
        return (
            <div className="phonetic">
                <audio className="phonetic container" controls src={props.phonetic.audio} />
            </div>
                );
    } else {
        return null;
    }
}