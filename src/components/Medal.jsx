// Minimal Requirements

// Continue working on the medals application
// Add the ability to track Gold, Silver & Bronze medals for each country
// Display the total gold, silver & bronze medals awarded for all countries
// Display the total medals earned for each country
// Here is the workflow that I followed:
// Modify App component state:
// const [countries, setCountries] = useState([
//   { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
//   { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
//   { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
// ]);

// Pass country as prop from Country component to Medal component
// Display medal counts in Medal component
// Create Olympic Medals header in App component
// Display total medals for each country in Country component
// Display total medals for all countries in App component
// Display increment / decrement buttons in Medal component
// Create handleIncrement / handleDecrement functions in App component, pass functions as props to Country component
// Pass handleIncrement / handleDecrement functions as props to Medal component
// Handle button click events for + - medals in Medal component using functions passed from App component
// Use conditional rendering to disable decrement button in Medal component when medal count = 0
// https://jgrissom.github.io/medals-03-beyond-basics-lab/Links to an external site.

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