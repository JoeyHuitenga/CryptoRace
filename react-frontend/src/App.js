import React from 'react';
import './App.css';
import CoinListItem from './Components/CoinListItem.js'

function App() {
  return (
    <div className = "App">
    <div className = "mainBody" >
    <div className="homepage-wrapper">
    <h1>Bibtobot Coins</h1>
    <CoinListItem />
    </div>
    </div>
    </div>
  );
}

export default App;
