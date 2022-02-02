import react from "react";

export default function Dictionary(){
   function search(event){
       event.preventDefault();
       alert("Searching");
   }
   
   
    return (
        <div className="Dictionary">
            <form>
                <input type="search" autoFocus={true}/>
            </form>
        </div>
    );
}