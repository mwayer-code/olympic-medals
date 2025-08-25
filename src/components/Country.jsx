import Medal from "./Medal";
export default function Country(props){
    return (
        <div className="content country">
            <div className="card">
                <div className="card-header">
                    <h2>{props.country.name}</h2>
                    <i onClick={() => props.onDelete(props.country.id)}>🗑️</i>
                </div>
                <hr></hr>
                <div className="medals">
                {props.medals.map((medal) => (
                <Medal key={medal.id} medal={medal} />
                ))}
                </div>
                
            </div>
        </div>
    
    );
}