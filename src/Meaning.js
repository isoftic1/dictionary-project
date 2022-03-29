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
                    
                    <em>{definition.example}</em>
                    <Synonyms synonyms={definition.synonyms} />  
                    </p>
                    </div>
            );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
}