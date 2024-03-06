import {useState, Fragment} from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import PokemonList from "./components/Pokemonlist";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

    

  return ( 
    <Fragment> 
      <div >
        
      <h1 className="App">Pokedex</h1>
      <Navbar  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/ >
      <PokemonList searchTerm={searchTerm} setSearchTerm={setSearchTerm} / >
      </div>
  </Fragment>
  )
}

export default App  
