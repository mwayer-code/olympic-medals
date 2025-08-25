// Continue working on the medals application
// Create a Medal component
// Add the ability to display Gold, Silver & Bronze medals for each country
// Here is the workflow that I followed:
// Modify the App component - Store medals in an array with a UseRef Hook:
// const medals = useRef([
//   { id: 1, name: "gold" },
//   { id: 2, name: "silver" },
//   { id: 3, name: "bronze" },
// ]);

// Pass the medals array as a prop to the Country component
// The Country component should render a Medal component for each element in the medals array using the array.map function
// Pass the appropriate prop(s) to the Medal component
// Create the Medal component - it will simply display the name of the medal (for now)
// https://jgrissom.github.io/medals-03-beyond-basics/Links to an external site.


export default function Medal(props){
    return(
        <div className="medal">
            {props.medal.name} Medals
        </div>
    );
}