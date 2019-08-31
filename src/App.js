import React from 'react';
import TaxCalculator from './components/TaxCalculator';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <div className="container">
      <nav className="nav justify-content-center">
        <h1>Ankit's utilities</h1>
      </nav>
     <TaxCalculator className="mb-4"/>
     <CurrentWeather/>
    </div>
  );
}

export default App;
