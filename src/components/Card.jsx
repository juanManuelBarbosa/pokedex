import "./Card.css"

function Card(props){
    return (
    <div className="Card">
       
        <h2>{props.title}</h2>
        <img src= {props.img} alt="props.title" width={150}/>
        
        <div className="stats-container">
            <div className="stats">
                <p>HP:</p>
                <p>{props.hp}</p>
            </div>

            <div className="stats">
                    <p>Ataque:</p>
                    <p>{props.attack}</p>
            </div>

            <div className="stats">
                    <p>Defensa: </p>
                    <p>{props.defense}</p>
            </div>

            <div className="stats">
                    <p>Ataque especial: </p>
                    <p>{props.specialAttack}</p>
            </div>
            
            <div className="stats">
                <p>defensa especial:</p>
                <p>{props.specialDefense}</p>
            </div>

            <div className="stats">
                <p>Velocidad:</p>
                <p>{props.speed}</p>
            </div>

            <div className="stats">
                <p>Peso: </p>
                <p>{props.weight} KG</p>
            </div>
            
             <div className="stats">
                <p>Altura: </p>
                <p>{(props.height)/10} M</p>
             </div>
        </div>

        <p>ID :  {props.id}</p>
    </div>
)
}

export default Card ;