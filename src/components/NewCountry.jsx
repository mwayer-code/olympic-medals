//Continue working on the medals application
// Create a NewCountry component - rendered in App.jsx
// NewCountry component includes a trigger which displays a dialog when clicked
// Use the dialog to input the name of the new country
// App component state must be updated when the new country is added
// Do not allow a country to be added if the name has no characters (do not allow spaces only for the name)
import { useState } from "react";
import "./NewCountry.css";
export default function NewCountry(props){

    const [country, setCountry] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);
    const [showDialog, setShowDialog] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        props.onAdd(country, gold, silver, bronze);
        hideDialog();
        
    }

    function hideDialog(){
        setCountry("");
        setShowDialog(false);
        setGold(0);
        setSilver(0);
        setBronze(0);
    }

    function handleKeyUp(e){
        e.keyCode === 27 && hideDialog();
    }



    return(
        <>

        {showDialog ? (
            <form onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
                <div id="overlay" onClick={hideDialog}></div>
                <div id="dialog">
                    <header>
                       Country: {country}
                    </header>

                    <div>
                        <input
                          id="country"
                          type="text"
                          placeholder="New Country"
                          maxLength={35}
                          autoCapitalize="on"
                          autoComplete="off"
                          autoCorrect="off"
                          autoFocus
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          onFocus={(e) => e.target.select()}

                        />
                    </div>
                    <div>
                        <label htmlFor="gold">Gold Medals:</label>
                        <input
                            id="gold"
                            type="number"
                            min="0"
                            value={gold}
                            onChange={(e) => setGold(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label htmlFor="silver">Silver Medals:</label>
                        <input
                            id="silver"
                            type="number"
                            min="0"
                            value={silver}
                            onChange={(e) => setSilver(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label htmlFor="bronze">Bronze Medals:</label>
                        <input
                            id="bronze"
                            type="number"
                            min="0"
                            value={bronze}
                            onChange={(e) => setBronze(Number(e.target.value))}
                        />
                    </div>

                    <div>
                        <button disabled={country.trim().length === 0} type="submit" id="save"
                        >
                            save
                        </button>
                    </div>
                    <div>
                        <button id="cancel" type="button" onClick={hideDialog}>
                            cancel
                        </button>
                    </div>

                </div>

            </form>

        ) : (
            <button onClick={() => setShowDialog(true)} className="newCountry">
                <span className="newCountryText">+</span>
            </button>
        
        )}
        
        
        </>
    );
}