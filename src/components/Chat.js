import React, { useState } from 'react';
import { getChatResponse } from '../services/openaiService';
import '../App.css';  // Ensure to import the CSS file

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = { role: "user", content: message };
    setChat([...chat, userMessage]);

    const response = await getChatResponse(message);
    const botMessage = response.choices[0].message;
    setChat([...chat, userMessage, botMessage]);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div>
        {chat.map((msg, index) => (
          <div key={index} className={msg.role === "user" ? "user-message" : "bot-message"}>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
