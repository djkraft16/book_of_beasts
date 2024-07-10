import React, { useState } from 'react';
import Chat from './components/Chat';
import MonsterCard from './components/Card';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);

  const addMonster = (monster) => {
    setMonsters((prevMonsters) => [...prevMonsters, monster]);
  };

  return (
    <div className="App">
      <div className="banner">
        <h1>DND Monster Maker | Powered by ChatGPT</h1>
      </div>
      <header className="App-header">
        <img src="/logo512.png" alt="Site Logo" className="logo" />
        <h1>Describe your monster to B.O.B. and he will produce it for you!</h1>
      </header>
      <Chat addMonster={addMonster} />
      <div className="monster-cards-container">
        {monsters.map((monster, index) => (
          <MonsterCard key={index} monster={monster} />
        ))}
      </div>
    </div>
  );
};

export default App;
