import "./Card.css"

function Card(props){
    return (
    <div className="Card">
        <h2>{props.title}</h2>
        <img src= {props.img} alt="props.title" width={150}/>
        <p>{props.description}</p>
    </div>
)
}

export default Card ;