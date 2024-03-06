//imports
import { useState } from "react";


const Navbar = ({onSearch})=>{
    const[search , setSearch] = useState('');

    const handleInputChange = (evnt) => {
        setSearch(evnt.target.value)
    }

    const handleInputKeyDown = (evnt) =>{
        if(evnt.key === "Enter"){
            onSearch(search)
        }
    };

    return (
        <div> 
            <input
            type="text" 
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Busca tu pokemon favorito"
            value={search}
            />    
        </div>
    )
};

export default Navbar;