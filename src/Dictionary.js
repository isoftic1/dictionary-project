import react from "react";

export default function Dictionary(){
   function search(event){
       event.preventDefault();
       alert("Searching");
   }
   
   
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" />
            </form>
        </div>
    );
}