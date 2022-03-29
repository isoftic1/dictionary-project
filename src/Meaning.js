import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning (props){
    return (
        <div className="Meanings">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                    <p>
                    {definition.definition}
                    <br/>
                    <strong>Example:</strong>
                    <em>{definition.example}</em>
                    <p><Synonyms synonyms={definition.synonyms}/>
                    </p>
                    </p>
                    </div>
            );
        })}
        </div>
    );
}