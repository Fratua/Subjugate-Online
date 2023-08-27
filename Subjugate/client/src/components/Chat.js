import React, { useState, useEffect } from 'react';
import { socket } from '../utils/socket';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chat-message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('chat-message');
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (input) {
      socket.emit('chat-message', input);
      setInput('');
    }
  };

  return (
    <div id="chat-window">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;