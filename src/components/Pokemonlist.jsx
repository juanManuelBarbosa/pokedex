import { useState , useEffect } from "react"
import Card from "./Card"
import Navbar from "./Navbar"


const pokemonList = ({searchTerm }) =>{
  
    const [pokemons , setPokemons] = useState([])

    //se recolecta en forma de promesa , la informacion de todos los pokemon 
    useEffect(()=>{
      const getPokemons = async () =>{
        //recuperamos el listado de pokemones 
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1008");
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
      pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    return(
        <div className="Container">
            
            {filteredPokemons.map((pokemon, index) => (
                <Card
                 key={index} 
                 title={pokemon.name} 
                 id={pokemon.id} 
                 img={pokemon.sprites.front_default} 
                 height={pokemon.height} 
                 weight={pokemon.weight} 
                 hp={pokemon.stats[0].base_stat} 
                 attack={pokemon.stats[1].base_stat} 
                 defense={pokemon.stats[2].base_stat} 
                 specialAttack={pokemon.stats[3].base_stat} 
                 specialDefense={pokemon.stats[4].base_stat} 
                 speed={pokemon.stats[5].base_stat} 
                 
                 />
            ))}
        </div>
    )
}

export default pokemonList