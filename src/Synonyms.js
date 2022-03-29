import react from "react";

export default function Synonyms(props){
    if (props.synonyms){
        return "Hello from Synonyms";
    } else{
        return null;
    }
}