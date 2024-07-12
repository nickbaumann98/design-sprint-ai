// src/components/ChatInterface.js
import React, { useState } from 'react';
import '../styles/ChatInterface.css';

const ChatInterface = ({ messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendClick = () => {
    onSendMessage(inputValue);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="chat-interface">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your response here..."
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;
