import React, {useState} from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

   function handleDictionaryResponse(response){
       setResults(response.data[0]);
   
   }
   function handlePexelsResponse(response){
       setPhotos(response.data.photos);

   }
    function search(event){
        event.preventDefault();
        
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
       axios.get(apiUrl).then(handleDictionaryResponse);
     
       let pexelsApiKey ="563492ad6f917000010000017167b79be6c241cdaeb67ce2eb0d75d1";
       let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
       let headers = {Authorization: `Bearer ${pexelsApiKey}`};
       axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
    }
   function handleKeywordChange(event){
       setKeyword(event.target.value);
   }
   
    return (
        <div className="Dictionary">
          <div className="container-box">
          <h1>What word do you want to look up?</h1>
          <form onSubmit={search}>
              <div className="d-flex">
                  <div className="flex-grow-1">
                  <input type="search" placeholder="Search" className="form-control" onChange={handleKeywordChange} />
                  </div>
                  <div className="mx-1">
                  <button value="Search" className="btn mx-1 px-4  text-center" type="submit">Search</button>
                  </div>
              </div>
            </form>
            <div className="suggestions mt-2">Such as: Sunset, nature, ocean </div>
            </div>
            <Results results={results}/>
            <Photos photos={photos}/>
          </div>
        
    );
} 