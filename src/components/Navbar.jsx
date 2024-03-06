import "./Navbar.css";
const Navbar = ({ searchTerm, setSearchTerm }) => {
    


    return (
        <input
        className="buscador"
        type="text"
        placeholder="Busca tu pokemon favorito"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    );
};

export default Navbar;