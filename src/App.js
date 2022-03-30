import Dictionary from "./Dictionary";
import './App.css';
import logo from "./logo.png";

function App() {
  return (
    <div className="container">
    <header>
      <div className="App mt-5">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
      </div>
    </header>
    <main>
      <Dictionary  />
    </main>
        <footer className="text-center">
        This website was designed and coded by UX Web Designer
         <a href="https://www.linkedin.com/in/izeta-softic-276531220/" target="_blank"
          rel="noreferrer"> Izeta Softic</a>, and is 
          <a href="https://github.com/isoftic1/dictionary-project.git" 
          target="_blank" rel="noreferrer"> open-sourced</a>.
        </footer>
      </div>
    
  );
}

export default App;
