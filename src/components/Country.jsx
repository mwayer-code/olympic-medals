import Medal from "./Medal";
export default function Country(props){
    return (
        <div className="content country">
            <div className="card">
                <div className="card-header">
                    <h2>{props.country.name}: {props.country.gold + props.country.silver + props.country.bronze}</h2>
                    <i onClick={() => props.onDelete(props.country.id)}>🗑️</i>
                </div>
                <hr></hr>
                <div className="medals">
                {props.medals.map((medal) => (
                <Medal key={medal.id} medal={medal} country={props.country}
                 handleDecrement={props.handleDecrement} handleIncrement={props.handleIncrement}/>
                ))}
                </div>
                
            </div>
        </div>
    
    );
}