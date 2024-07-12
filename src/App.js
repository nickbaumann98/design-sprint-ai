import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';
import './styles/App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [stickyNotes, setStickyNotes] = useState([]);
  const [polishedGoal, setPolishedGoal] = useState('');

  const handleSendMessage = async (message) => {
    setMessages([...messages, { sender: 'user', text: message }]);

    const response = await fetch('/api/get_feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ long_term_goal: message })
    });

    const data = await response.json();
    setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: data.feedback }]);
    setPolishedGoal(data.polished_goal);
  };

  const addNote = (note) => {
    setStickyNotes([...stickyNotes, note]);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar stickyNotes={stickyNotes} addNote={addNote} />
      </div>
      <div className="main-content">
        <h1>Step 1: Define Your Goal</h1>
        <div className="chat-container">
          <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
        </div>
      </div>
      <div className="right-sidebar">
        <h2>Polished Long-term Goal:</h2>
        <div className="polished-goal">{polishedGoal}</div>
      </div>
    </div>
  );
};

export default App;
