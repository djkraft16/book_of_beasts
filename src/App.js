import React from 'react';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1>DND Monster Maker | Powered by ChatGPT</h1>
      </div>
      <header className="App-header">
        <img src="/logo512.png" alt="Site Logo" className="logo"/>
        <h1>Describe your Monster</h1>
      </header>
      <Chat />
    </div>
  );
}

export default App;
