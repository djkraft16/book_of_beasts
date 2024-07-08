import React, { useState } from 'react';
import { getChatResponse } from '../services/openaiService';
import MonsterCard from './Card';
import '../Chat.css';

const Chat = () => {
  const [monsters, setMonsters] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const response = await getChatResponse(input);
      const newMonster = JSON.parse(response); // Assuming response is a JSON string of monster data
      setMonsters((prevMonsters) => [...prevMonsters, newMonster]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }

    setInput('');
  };

  return (
    <div className="chat-app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe a new monster..."
        />
        <button type="submit">Generate Monster</button>
      </form>
      <div className="monster-cards-container">
        {monsters.map((monster, index) => (
          <MonsterCard key={index} monster={monster} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
