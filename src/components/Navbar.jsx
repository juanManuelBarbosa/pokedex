import { useState } from "react";

const Navbar = ({ searchTerm, setSearchTerm }) => {
    


    return (
        <input
        type="text"
        placeholder="Busca tu pokemon favorito"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    );
};

export default Navbar;