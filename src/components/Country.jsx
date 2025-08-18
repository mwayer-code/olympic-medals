// The Country component has two state properties, name (default value = "United States"), and gold (default value = 0)
// When the button is clicked, use an event handling function (handleClick) to update the gold state property (for each click increase its value by 1) in a way that causes the component to be re-rendered

import { useState } from "react";
function Country(){
    const [name, setName] = useState("🟦United States🟥");
    const [gold, setGold ] = useState(0)

    function handleClick(){
        setGold(gold + 1 );
    }

    return (
        <div className="content">
            <div className="card">
                <div className="card-header">
                    <h2>{name}</h2>
                </div>
                <hr></hr>
                <div className="card-body">
                    <p>🥇 Gold Medals: {gold}</p>
                    <button onClick={handleClick}>+</button>
                </div>
                
            </div>
        </div>
        

    );
}

export default Country;