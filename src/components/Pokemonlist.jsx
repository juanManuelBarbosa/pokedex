import { useState , useEffect } from "react"
import Card from "./Card"


const pokemonList = ({searchTerms}) =>{
  
    const [pokemons , setPokemons] = useState([])

    const [searchTerm, setSearchTerm] = useState("");

    //se recolecta en forma de promesa , la informacion de todos los pokemon 
    useEffect(()=>{
      const getPokemons = async () =>{
        //recuperamos el listado de pokemones 
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
        const pokemonList = await response.json()
        const results = pokemonList.results; 
        
        const pokemonDetails = await Promise.all(
          results.map(async (pokemon)=>{
            const response = await fetch(pokemon.url);
            return response.json()
          })
        )
        setPokemons(pokemonDetails)     

      }

      getPokemons()
    }, [])


    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
      <div className="Container">
      <input
          type="text"
          placeholder="Search Pokemon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPokemons.map((pokemon, index) => (
          <Card key={index} title={pokemon.name} description={pokemon.id} img={pokemon.sprites.front_default} />
      ))}
  </div>
    )
}

export default pokemonList