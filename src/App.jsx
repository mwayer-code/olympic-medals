import { useState, useRef } from 'react';
import Country from './components/Country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States'},
    { id: 2, name: 'China'},
    { id: 3, name: 'France'},
  ]);

  const medals = useRef([
  { id: 1, name: "gold" },
  { id: 2, name: "silver" },
  { id: 3, name: "bronze" },
]);

  function handleDelete(countryId){
    console.log(`delete country: ${countryId}`)
    setCountries(countries.filter((c) => c.id !== countryId))
  }

  return (
    <div className='countries'>
      {countries.map((country) => (
        <Country key={country.id} country={country} onDelete={handleDelete} medals={medals.current}/>
      ))}
    </div>
  );
}

export default App
