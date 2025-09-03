import { useState, useRef } from 'react';
import Country from './components/Country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
  { id: 1, name: "USA", gold: 2, silver: 2, bronze: 3 },
  { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
  { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
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
  function countAllCountryMedals() {
    return countries.reduce((a, b) => a + b.gold + b.silver + b.bronze, 0);
  }

  function handleIncrement(countryId, medalType) {
    setCountries(countries.map((c) => (
      c.id === countryId ? { ...c, [medalType]: c[medalType] + 1 } : c
    )))
  }
  function handleDecrement(countryId, medalType) {
    setCountries(countries.map((c) => (
      c.id === countryId && c[medalType] > 0 ? { ...c, [medalType]: c[medalType] - 1 } : c
    )))
  } 
  console.log(countAllCountryMedals());

  return (
    <div>
      <header><h1>Olympic Medals: <span>{countAllCountryMedals()}</span></h1></header>
      <div className='countries'>
        {countries.map((country) => (
          <Country key={country.id} country={country} onDelete={handleDelete} medals={medals.current}
          handleIncrement={handleIncrement} handleDecrement={handleDecrement}
          />
        ))}
      </div>
    </div>
  );
}

export default App
