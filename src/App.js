import React from 'react';
import TaxCalculator from './components/TaxCalculator';
import CurrentWeather from './components/CurrentWeather';
import TipCaculator from './components/TipCalculator';

function App() {
  return (
    <div className="container">
      <nav className="nav justify-content-center">
        <h1>Ankit's utilities</h1>
      </nav>
     <TaxCalculator/>
     <CurrentWeather/>
     <TipCaculator/>
    </div>
  );
}

export default App;
