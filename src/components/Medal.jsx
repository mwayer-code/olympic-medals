export default function Medal(props){

    function incrementMedalCount() {
        props.handleIncrement(props.country.id, props.medal.name);
    }

    function decrementMedalCount() {
        props.handleDecrement(props.country.id, props.medal.name);
    }
    

    return(
        <div className="medal">
            {props.medal.name} Medals: 

            <div className="flexed-items">
                <button className="decrement" onClick={decrementMedalCount} disabled={props.country[props.medal.name] === 0}><span className="decrement-text">-</span></button>
                <span className="medal-count">{props.country[props.medal.name]}</span>
                <button className="increment" onClick={incrementMedalCount}><span className="increment-text">+</span></button>
            </div>
        </div>
    );
}