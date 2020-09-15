import React from 'react';
import './App.css';
import CoinListItem from './Components/CoinListItem/index.js'

function App() {
  return (
    <div className = "App">
    <div className = "mainBody" >
    <div className="item-wrapper">
    <CoinListItem />
    <CoinListItem />
    <CoinListItem />
    <CoinListItem />
    <CoinListItem />
    <CoinListItem />
    <CoinListItem />
    </div>
    </div>
    </div>
  );
}

export default App;
