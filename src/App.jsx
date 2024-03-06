import {useState, Fragment} from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import PokemonList from "./components/Pokemonlist";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleNavbarSearch = (term)=>{
    setSearchTerm(term); 
    
  }; 

  return ( 
    <Fragment> 
      <div >
        
      <h1 className="App">Pokedex</h1>
      <Navbar onSearch ={handleNavbarSearch}/ >
      <PokemonList searchTerm= {searchTerm}/ >
      </div>
  </Fragment>
  )
}

export default App  
