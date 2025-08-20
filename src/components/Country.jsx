
export default function Country(props){
    return (
        <div className="content country">
            <div className="card">
                <div className="card-header">
                    <h2>{props.country.name}</h2>
                    <i onClick={() => props.onDelete(props.country.id)}>🗑️</i>
                </div>
                <hr></hr>
                <div className="card-body">
                    <p>🥇 Gold Medals: {props.country.gold}</p>
                    {/* <button onClick={handleClick}>+</button> */}
                </div>
                
            </div>
        </div>
    
    );
}