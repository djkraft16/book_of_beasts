import React, { useState } from 'react';
import { getChatResponse } from '../services/openaiService';
import '../Chat.css';

const Chat = ({ addMonster }) => {
  const [input, setInput] = useState('');
  const [extraText, setExtraText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const response = await getChatResponse(input);
      addMonster(response.monster);
      setExtraText(response.extraText);
    } catch (error) {
      console.error('Error fetching response:', error);
    }

    setInput('');
  };

  return (
    <div className="chat">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe a new monster..."
        />
        <button type="submit">Generate Monster</button>
      </form>
      {extraText && <div className="extra-text">{extraText}</div>}
    </div>
  );
};

export default Chat;
